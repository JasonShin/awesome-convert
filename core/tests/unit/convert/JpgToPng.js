import path from 'path'
import JpgToPng from '../../../convert/JpgToPng'

describe('#PngToJpg', () => {
  it('should create correct file when png is given', (done) => {
    JpgToPng({
      src: path.join(__dirname, '../../assets/jpg-test.jpg'),
      dest: path.join(__dirname, '../../assets/tmp/jpg-test.png')
    })
      .fork(console.error, (res) => done())
  })
})