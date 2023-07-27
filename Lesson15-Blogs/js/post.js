const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const slug = urlParams.get('slug') ?? 1;
const arraySlug = typeof slug === 'string' ? slug.split('-') : slug;
const id = Array.isArray(arraySlug)
	? arraySlug[arraySlug.length - 1]
	: arraySlug;

fetch('https://64c25bf6eb7fd5d6ebcfb370.mockapi.io/api/v1/blogs/' + id, {
	method: 'GET',
})
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		if (data === 'Something went wrong while parsing response JSON') {
			document.getElementById('body').innerHTML = `<h1>Page not found</h1>`;
		} else {
			renderBlog(data);
		}
	})
	.catch((err) => {
		console.log('err: ', err);
	});

const renderBlog = (data) => {
	console.log('data.bannerBlog: ', data.banner_blog);
	document.getElementById('banner').style.backgroundImage = `url(
		${data.banner_blog}
	)`;
};
