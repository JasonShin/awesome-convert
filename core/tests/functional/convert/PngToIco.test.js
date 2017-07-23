import path from 'path'
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'
import ImageConverter from '../../../convert/ImageConverter'

describe('#PngToIco', () => {
  /* afterEach((done) => {
   clearTestTmpAssets().fork(
   (err) => console.error(err),
   () => done()
   )
   }) */
  it('Should convert png to ico test', (done) => {
    ImageConverter({
      src: path.join(__dirname, '../../assets/home-icon.png'),
      dest: path.join(__dirname, '../../assets/tmp/home-icon.ico')
    })
      .fork(
        (e) => console.error('Failed to convert png to ico ', e),
        () => done(),
      )
  })
})