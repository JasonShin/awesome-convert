import path from 'path'
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'
import ImageConverter from '../../../convert/ImageConverter'

describe('#JpgToPdf', () => {
  /* afterEach((done) => {
   clearTestTmpAssets().fork(
   (err) => console.error(err),
   () => done()
   )
   }) */
  it('Should convert txt to tiff', (done) => {
    ImageConverter({
      src: path.join(__dirname, '../../assets/jpg-test.jpg'),
      dest: path.join(__dirname, '../../assets/tmp/jpg-test.pdf')
    })
      .fork(
        () => console.error('Failed to convert txt to tiff'),
        () => done(),
      )
  })
})