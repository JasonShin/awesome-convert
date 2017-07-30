import R from 'ramda';
import fantasy from 'ramda-fantasy';
import path from 'path';
import fs from 'fs';

export const Future = fantasy.Future;

export const removeFile = fullPath => {
	return new Future((rej, res) => {
		fs.unlink(fullPath, err => {
			if (err) {
				return rej(err);
			}
			return res(true);
		});
	});
};

export const removeFiles = ({folder, files}) => {
	return new Future((rej, res) => {
		const fullPaths = R.map(file => `${folder}/${file}`, files);
		const removeAllFiles = R.traverse(Future.of, removeFile, fullPaths);
		removeAllFiles.fork(
      err => {
	return rej(err);
},
      () => {
	return res();
},
    );
	});
};

export const getTmpFiles = tmpFolder => {
	return new Future((rej, res) => {
		const ignoredFiles = ['.placeholder'];
		fs.readdir(tmpFolder, (err, files) => {
			if (err) {
				return rej(err);
			}
			return res({
				folder: tmpFolder,
				files: R.without(ignoredFiles, files)
			});
		});
	});
};

export const getTmpFolder = () => {
	return new Future((rej, res) => {
		return res(path.join(__dirname, '../tests/assets/tmp'));
	});
};

export default R.compose(
  R.chain(removeFiles),
  R.chain(getTmpFiles),
  getTmpFolder,
);

