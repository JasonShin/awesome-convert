import path from 'path'
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'
import ImageConverter from '../../../convert/ImageMagick'

describe('#TxtToJpg', () => {
  /* afterEach((done) => {
   clearTestTmpAssets().fork(
   (err) => console.error(err),
   () => done()
   )
   }) */
  it('Should convert txt to tiff', (done) => {
    ImageConverter({
      src: path.join(__dirname, '../../assets/random-text.txt'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.tiff')
    })
      .fork(
        () => console.error('Failed to convert txt to tiff'),
        () => done(),
      )
  })
})