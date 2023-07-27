// fetch("linkapi", option)
const content_blogs = document.getElementById('content-blogs');

fetch('https://64c25bf6eb7fd5d6ebcfb370.mockapi.io/api/v1/blogs', {
	method: 'GET',
})
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		renderBlogs(data);
	})
	.catch((err) => {
		console.log(err);
	});

const convertSlug = (title, id) => {
	return title.toLowerCase().replaceAll(' ', '-').replace('.', '-') + id;
};

const renderBlogs = (blogs) => {
	let stringHTML = '';
	for (let blog of blogs) {
		stringHTML += `
        <div class="post-preview">
			<a href="post.html?slug=${convertSlug(blog.title, blog.id)}">
				<h2 class="post-title">
					${blog.title}
				</h2>
				<h3 class="post-subtitle">
					${blog.description}
				</h3>
			</a>
			<p class="post-meta">
				Posted by
				<a href="#!">${blog.author}</a>
				on ${blog.createdAt}
			</p>
		</div>

		<hr class="my-4" />
        `;
	}
	content_blogs.innerHTML = stringHTML;
};
