import assert from 'assert'
import path from 'path'
import PngToJpg from '../../../convert/PngToJpg'

describe('png to jpg', () => {
  it('should create correct file', (done) => {
    PngToJpg(
      path.join(__dirname, '../../assets/png-test.png'),
      path.join(__dirname, '../../assets/png-test.jpg')
    )
      .fork(console.error, (res) => {
        console.log('success ', res)
        done()
      })
  })

  it('should not create correct file', (done) => {
    console.log('testing file should not create')
    PngToJpg(
      path.join(__dirname, '../../assets/random-text.txt'),
      path.join(__dirname, '../../assets/png-test.jpg')
    )
      .fork(console.error, console.log)
  })
})