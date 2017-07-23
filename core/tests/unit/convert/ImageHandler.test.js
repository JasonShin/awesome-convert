import path from 'path'
import ImageConverter from '../../../convert/ImageConverter'

describe('#ImageHandlerTest', () => {
  it('should create correct file when png is given', (done) => {
    ImageConverter({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test3.jpg'),
    }).fork(console.error, () => done())
  })
})
