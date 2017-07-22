import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'

describe('#clearTestTmpAssets', () => {
  it('clearing tmp folder except for .placeholder ', (done) => {
    clearTestTmpAssets().fork(
      (err) => console.error(err),
      () => done()
    )
  })
})
