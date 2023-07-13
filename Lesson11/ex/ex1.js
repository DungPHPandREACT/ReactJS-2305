const image = document.getElementById('image');
const url = document.getElementById('url');
const width = document.getElementById('width');
const height = document.getElementById('height');
const radius = document.getElementById('radius');
const alt = document.getElementById('alt');

url.onchange = () => {
	const value = url.value;

	image.src = valueUrl;
};

document.getElementById('width').onchange = () => {
	const value = document.getElementById('width').value;

	document.getElementById('image').style.width = value + 'px';
};

height.onchange = () => {
	const value = height.value;

	image.style.height = value + 'px';
};

radius.onchange = () => {
	const value = radius.value;

	image.style.borderRadius = value + 'px';
};

alt.onchange = () => {
	const value = alt.value;

	image.alt = value;
};
