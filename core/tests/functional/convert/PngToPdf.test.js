import path from 'path'
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'
import ImageConverter from '../../../convert/ImageMagick'

describe('#PngToPdf', () => {
  afterEach((done) => {
    clearTestTmpAssets().fork(
      (err) => console.error(err),
      () => done()
    )
  })
  it('Should convert png to pdf', done => {
    ImageConverter.convert({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.pdf')
    })
      .fork(
        () => console.error('Failed to convert txt to tiff'),
        () => done()
      )
  })
})
