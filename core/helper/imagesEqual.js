import fantasy from 'ramda-fantasy';
import gm from 'gm';

const Future = fantasy.Future;

const imagesEqual = (src, dest) => {
	return new Future((rej, res) => {
		gm.compare(src, dest,
      (err, isEqual, equality) => {
	if (equality === 0) {
		return res(true);
	}
	return rej(false);
}
    );
	});
};

export default imagesEqual;
