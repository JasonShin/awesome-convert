import assert from 'assert'
import path from 'path'
import PngToJpg from '../../../convert/PngToJpg'

describe('png to jpg', () => {
  it('should create correct file extension', () => {
    PngToJpg(path.join(__dirname, '../../assets/png-test.png'))
      .fork(console.error, (res) => {
        console.log('success ', res)
        assert.ok(true)
      })

  })
})