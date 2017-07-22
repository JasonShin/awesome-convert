import path from 'path'
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'
import PngToJpg from '../../../convert/PngToJpg'

describe('png to jpg', () => {
  afterEach((done) => {
    clearTestTmpAssets().fork(
      (err) => console.error(err),
      () => done()
    )
  })

  it('should create correct file when png is given', (done) => {
    PngToJpg(
      path.join(__dirname, '../../assets/png-test.png'),
      path.join(__dirname, '../../assets/tmp/png-test.jpg')
    )
      .fork(console.error, (res) => {
        done()
      })
  })

  it('should not create correct file when txt is given', (done) => {
    PngToJpg(
      path.join(__dirname, '../../assets/random-text.txt'),
      path.join(__dirname, '../../assets/tmp/png-test.jpg')
    )
      .fork(
        () => done(),
        () => console.error('It should not create txt as jpg !')
      )
  })
})