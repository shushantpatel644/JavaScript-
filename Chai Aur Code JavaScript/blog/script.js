document.addEventListener('DOMContentLoaded', function () {
    let blogData = JSON.parse(localStorage.getItem('blogData')) || [];

    const mainContent = document.getElementById('main-content');
    const blogFormContainer = document.getElementById('blog-form-container');
    const blogForm = document.getElementById('blog-form');
    const blogTitleInput = document.getElementById('blog-title');
    const blogContentInput = document.getElementById('blog-content');
    const saveBlogButton = document.getElementById('save-blog');
    const cancelBlogButton = document.getElementById('cancel-blog');

    function renderBlogPosts() {
        mainContent.innerHTML = '';

        blogData.forEach((post, index) => {
            const article = document.createElement('article');
            const title = document.createElement('h2');
            const content = document.createElement('p');
            const editButton = document.createElement('button');
            const deleteButton = document.createElement('button');

            title.textContent = post.title;
            content.textContent = post.content;
            editButton.textContent = 'Edit';
            deleteButton.textContent = 'Delete';

            editButton.addEventListener('click', () => editBlogPost(index));
            deleteButton.addEventListener('click', () => deleteBlogPost(index));

            article.appendChild(title);
            article.appendChild(content);
            article.appendChild(editButton);
            article.appendChild(deleteButton);

            mainContent.appendChild(article);
        });
    }

    function showBlogForm() {
        blogForm.reset();
        blogFormContainer.style.display = 'block';
    }

    function hideBlogForm() {
        blogFormContainer.style.display = 'none';
    }

    function addBlogPost(title, content) {
        const newPost = { title, content };
        blogData.push(newPost);
        saveToLocalStorage();
        renderBlogPosts();
        hideBlogForm();
    }

    function editBlogPost(index) {
        const postToEdit = blogData[index];
        blogTitleInput.value = postToEdit.title;
        blogContentInput.value = postToEdit.content;

        showBlogForm();

        saveBlogButton.onclick = function () {
            const newTitle = blogTitleInput.value;
            const newContent = blogContentInput.value;

            if (newTitle.trim() !== '' && newContent.trim() !== '') {
                blogData[index] = { title: newTitle, content: newContent };
                saveToLocalStorage();
                renderBlogPosts();
                hideBlogForm();
            } else {
                alert('Please enter both title and content for the blog post.');
            }
        };

        cancelBlogButton.onclick = function () {
            hideBlogForm();
        };
    }

    function deleteBlogPost(index) {
        const confirmDelete = confirm('Are you sure you want to delete this post?');

        if (confirmDelete) {
            blogData.splice(index, 1);
            saveToLocalStorage();
            renderBlogPosts();
        }
    }

    function saveToLocalStorage() {
        localStorage.setItem('blogData', JSON.stringify(blogData));
    }

    // Event listeners
    document.getElementById('new-post-button').addEventListener('click', showBlogForm);

    document.getElementById('new-post-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const titleInput = document.getElementById('new-post-title');
        const contentInput = document.getElementById('new-post-content');
        const title = titleInput.value;
        const content = contentInput.value;

        if (title.trim() !== '' && content.trim() !== '') {
            addBlogPost(title, content);
            titleInput.value = '';
            contentInput.value = '';
        } else {
            alert('Please enter both title and content for the new post.');
        }
    });

    // Initial render
    renderBlogPosts();
});
