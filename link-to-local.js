const changeLines = require('./change-lines');
// const home = os.homedir();
// const home = process.env.HOME;
// const projects = process.env.PROJECTS;
const packagesToLinkLocal = ['atomic', 'comments'];
const whereToChange = [
	{
		file: `/home/barry/sites/ripley/packages/ui-design-system/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/ripley/packages/image-editor/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/ripley/packages/foleon-media-library/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/ripley/packages/foleon-font-library/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/ripley/packages/deprecated-ui-kit/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/ripley/packages/ui-kit/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/ripley/packages/foleon-core-editor/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/ripley/packages/foleon-core-viewer/package.json`,
		pathPrefix: '../../../',
	},
	{
		file: `/home/barry/sites/comments/package.json`,
		pathPrefix: '../',
	},
];

const getLines = (pathPrefix) => {
	return packagesToLinkLocal.map((package) => ({
		find: `"@foleon/${package}":`,
		replace: `"@foleon/${package}": "link:${pathPrefix}${package}"`,
	}));
};

whereToChange.forEach((where) => {
	console.log('updating', where.file);
	changeLines.change({
		file: where.file,
		lines: getLines(where.pathPrefix),
	});
});
console.log('files updated.');
