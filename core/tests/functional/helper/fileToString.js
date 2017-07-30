import path from 'path';
import chai from 'chai';
import fileToString from '../../../helper/fileToString';

const assert = chai.assert;

describe('#fileToString', () => {
	it('doc.html is read from file system ', done => {
		fileToString(path.join(__dirname, '../../assets/docs.html')).fork(
      err => console.error(err),
      res => {
	done();
}
    );
	});
	it('doc.html is read as string ', done => {
		fileToString(path.join(__dirname, '../../assets/docs.html')).fork(
      err => console.error(err),
      res => {
	assert.equal(typeof res, 'string');
	done();
}
    );
	});
});
