const projects = [
	'tribute-page',
	'build-a-survey-form',
	'build-a-product-landing-page',
	'build-a-technical-documentation-page',
	'build-a-personal-portfolio-webpage'
];
const list = document.getElementById('list');

projects.forEach((project, i) => {
	const listItem = document.createElement('li');
	const link = document.createElement('a');
	link.href = `/${project}/index.html`;
	link.innerText = `${i + 1}. ${formatProjectName(project)}`;

	const img = document.createElement('img');
	img.src = `/${project}/images/desktop-design.jpg`;

	link.prepend(img); // makes the img on top of text
	listItem.appendChild(link);
	list.appendChild(listItem);
});

// Get ride of (-) in the name projects

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
