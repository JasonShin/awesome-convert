import path from 'path'
import ImageHandler from '../../../convert/ImageHandler'

describe('#ImageHandlerTest', () => {
  it('should create correct file when png is given', (done) => {
    ImageHandler({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test3.jpg'),
    }).fork(console.error, () => done())
  })
})