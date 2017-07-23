import path from 'path'
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'
import ImageConverter from '../../../convert/ImageConverter'

describe('#TxtToJpg - ImageConverter', () => {
  afterEach((done) => {
    clearTestTmpAssets().fork(
      (err) => console.error(err),
      () => done()
    )
  })
  it('Should convert txt to jpg', (done) => {
    ImageConverter({
      src: path.join(__dirname, '../../assets/random-text.txt'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg')
    })
      .fork(
        () => console.error('Failed to convert txt to jpg'),
        () => done(),
      )
  })
})