import path from 'path'
import ImageConverter from '../../../convert/ImageConverter'

describe('#JpgToPng - ImageConverter', () => {
  it('should create correct file when png is given', (done) => {
    ImageConverter({
      src: path.join(__dirname, '../../assets/jpg-test.jpg'),
      dest: path.join(__dirname, '../../assets/tmp/jpg-test.png')
    })
      .fork(console.error, (res) => done())
  })
})