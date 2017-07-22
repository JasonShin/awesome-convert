import path from 'path'
import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'
import PngToJpg from '../../../convert/PngToJpg'

describe('#PngToJpg', () => {
  /* afterEach((done) => {
    clearTestTmpAssets().fork(
      (err) => console.error(err),
      () => done()
    )
  }) */

  it('should create correct file when png is given', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg')
    })
      .fork(console.error, (res) => done())
  })

  it('should not convert when txt is given', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/random-text.txt'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg')
    })
      .fork(
        () => done(),
        () => console.error('It should not create txt as jpg !')
      )
  })

  it('should accept custom image conversion quality: 10', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
      quality: 10,
    })
      .fork(
        () => console.error('It could not convert to jpg in 10% quality'),
        () => done(),
      )
  })

  it('should accept custom image conversion quality: 20', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
      quality: 20,
    })
      .fork(
        () => console.error('It could not convert to jpg in 20% quality'),
        () => done(),
      )
  })

  it('should accept custom image conversion quality: 30', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
      quality: 30,
    })
      .fork(
        () => console.error('It could not convert to jpg in 30% quality'),
        () => done(),
      )
  })

  it('should accept custom image conversion quality: 40', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
      quality: 40,
    })
      .fork(
        () => console.error('It could not convert to jpg in 40% quality'),
        () => done(),
      )
  })

  it('should accept custom image conversion quality: 50', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
      quality: 50,
    })
      .fork(
        () => console.error('It could not convert to jpg in 40% quality'),
        () => done(),
      )
  })

  it('should accept custom image conversion quality: 100', (done) => {
    PngToJpg({
      src: path.join(__dirname, '../../assets/png-test.png'),
      dest: path.join(__dirname, '../../assets/tmp/png-test.jpg'),
      quality: 100,
    })
      .fork(
        () => console.error('It could not convert to jpg in 100% quality'),
        () => done(),
      )
  })
})