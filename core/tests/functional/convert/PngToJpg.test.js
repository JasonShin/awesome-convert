import path from 'path';
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets';
import ImageConverter from '../../../convert/ImageMagick';

describe('#PngToJpg - ImageConverter', () => {
  afterEach((done) => {
    clearTestTmpAssets().fork(
      (err) => console.error(err),
      () => done()
    )
  })

	it('should create correct file when png is given', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/png-test.png'),
			dest: path.join(__dirname, '../../assets/tmp/png-test.jpg')
		})
      .fork(console.error, res => done());
	});

	it('should accept custom image conversion quality: 10', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/png-test.png'),
			dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
			quality: 10
		})
      .fork(
        () => console.error('It could not convert to jpg in 10% quality'),
        () => done(),
      )
	})

	it('should accept custom image conversion quality: 20', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/png-test.png'),
			dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
			quality: 20
		})
      .fork(
        () => console.error('It could not convert to jpg in 20% quality'),
        () => done(),
      );
	});

	it('should accept custom image conversion quality: 30', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/png-test.png'),
			dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
			quality: 30
		})
      .fork(
        () => console.error('It could not convert to jpg in 30% quality'),
        () => done(),
      );
	});

	it('should accept custom image conversion quality: 40', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/png-test.png'),
			dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
			quality: 40
		})
      .fork(
        () => console.error('It could not convert to jpg in 40% quality'),
        () => done(),
      );
	});

	it('should accept custom image conversion quality: 50', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/png-test.png'),
			dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
			quality: 50
		})
      .fork(
        () => console.error('It could not convert to jpg in 40% quality'),
        () => done(),
      );
	});

	it('should accept custom image conversion quality: 100', done => {
		ImageConverter.convert({
			src: path.join(__dirname, '../../assets/png-test.png'),
			dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
			quality: 100
		})
      .fork(
        () => console.error('It could not convert to jpg in 100% quality'),
        () => done(),
      );
	});
});
