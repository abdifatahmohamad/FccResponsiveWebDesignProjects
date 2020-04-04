const projects = [
	{
		name: 'tribute-page',
		github:
			'https://github.com/abdifatahali/FccResponsiveWebDesignProjects/tree/master/tribute-page'
	},
	{
		name: 'build-a-survey-form',
		github:
			'https://github.com/abdifatahali/FccResponsiveWebDesignProjects/tree/master/tribute-page'
	},
	{
		name: 'build-a-product-landing-page',
		github:
			'https://github.com/abdifatahali/FccResponsiveWebDesignProjects/tree/master/tribute-page'
	},
	{
		name: 'build-a-technical-documentation-page',
		github:
			'https://github.com/abdifatahali/FccResponsiveWebDesignProjects/tree/master/tribute-page'
	},
	{
		name: 'build-a-personal-portfolio-webpage',
		github:
			'https://github.com/abdifatahali/FccResponsiveWebDesignProjects/tree/master/tribute-page'
	}
];
const list = document.getElementById('list');

projects.forEach(({ name, github }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
	<a href="/${name}/index.html">
		<img src="/${name}/images/desktop-design.jpg" />
		<p>${i + 1}. ${formatProjectName(name)}</p>
	</a>


	<div class="links-container">
		<a href="/${name}/index.html" class="blue">
			<i class="fa fa-eye" style="font-size:26px"></i>
		</a>
		<a href="${github}" class="github">
			<i class="fa fa-github" style="font-size:26px"></i>
		</a>
	</div>
	`;

	list.appendChild(listItem);
});

// Get ride of (-)in the name projects

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
