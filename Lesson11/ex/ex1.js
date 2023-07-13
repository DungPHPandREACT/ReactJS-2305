const image = document.getElementById('image');

document.getElementById('url').onchange = () => {
	const valueUrl = document.getElementById('url').value;

	image.src = valueUrl;
};
