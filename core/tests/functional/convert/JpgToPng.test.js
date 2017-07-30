import path from 'path';
import imagesEqual from '../../../helper/imagesEqual';
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets';
import ImageConverter from '../../../convert/ImageMagick';

describe('#JpgToPng - ImageConverter', () => {
	it('should create correct file when png is given', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/jpg-test.jpg'),
			dest: path.join(__dirname, '../../assets/tmp/jpg-test.png')
		})
      .fork(console.error, res => done());
	});
	it('should pass equality check', done => {
		imagesEqual(
      path.join(__dirname, '../../assets/jpg-test.jpg'),
      path.join(__dirname, '../../assets/tmp/jpg-test.png')
    ).fork(() => console.error, res => done());
	});
	after(done => {
		clearTestTmpAssets().fork(
      err => console.error(err),
      () => done()
    );
	});
});
