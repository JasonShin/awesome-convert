import clearTestTmpAssets from '../../../helper/clearTestTmpAssets'

describe('clearTestTmpAssets', () => {
  it('clearing tmp folder except for .placeholder ', (done) => {
    console.log('checking clear test assets ', clearTestTmpAssets())
    clearTestTmpAssets().fork(
      (err) => console.error(err),
      () => done()
    )
  })
})