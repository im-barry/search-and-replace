const fs = require('fs');
const encoding = 'utf8';

const replaceInData = (data, find, replace) => {
	const lineStart = data.indexOf(find);
	if (lineStart === -1) return data;
	const lineEnd = data.indexOf('\n', lineStart);
	const hasComma = data.substring(lineEnd - 1, lineEnd) === ',';
	const lineData = data.substring(lineStart, lineEnd);
	return data.replace(lineData, `${replace}${hasComma ? ',' : ''}`);
};

module.exports = {
	change: ({ file, lines }) => {
		fs.readFile(file, { encoding }, (err, data) => {
			if (err) {
				console.log('error', err, file);
				return;
			}
			lines.forEach(({ find, replace }) => {
				data = replaceInData(data, find, replace);
			});
			fs.writeFile(file, data, encoding, (err) => {
				if (err) console.log('something went wrong', err);
			});
		});
	},
};
