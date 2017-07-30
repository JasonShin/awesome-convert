import R from 'ramda';
import fastasy from 'ramda-fantasy';
import gm from 'gm';

const Future = fastasy.Future;

/**
 * General GM handler that supports everything form gm module
 * @param src
 * @param dest
 * @param options [{ name: <e.g. quality>, value: 100 }]
 */
const handler = ({
  src,
  dest,
  options = []
}) => {
	return new Future((rej, res) => {
		if (!src) {
			return rej('Source was not provided');
		}
		const core = gm(src);
		const manipulated = R.reduce((acc, man) => {
			R.invoker(1, man.name, man.value, acc);
			return acc;
		}, core, options);
		manipulated.write(dest, err => {
			if (err) {
				return rej(err);
			}
			return res();
		});
	});
};

export default {
	handler,
	name: 'gm'
};
