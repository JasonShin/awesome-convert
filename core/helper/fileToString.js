import fs from 'fs';
import fastasy from 'ramda-fantasy';

const Future = fastasy.Future;

const fileToString = path => {
	return new Future((rej, res) => {
		try {
			fs.readFile(path, 'utf8', (e, words) => {
				if (e) {
					console.error('Could not convert file to string ', e);
					rej(false);
				}
				return res(words);
			});
		} catch (e) {
			console.error('Error while converting file to string ', e);
			return rej(false);
		}
	});
};

export default fileToString;
