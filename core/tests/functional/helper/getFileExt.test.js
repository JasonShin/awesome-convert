import chai from 'chai'
import getFileExt from '../../../helper/getFileExt'

const assert = chai.assert

describe('#getFileEXT', () => {
  it('doc.html should equal html ', () => {
    assert.equal(getFileExt('doc.html'), 'html')
  })
  it('doc.HTML should equal html ', () => {
    assert.equal(getFileExt('doc.HTML'), 'html')
  })
  it('doc.aosioao.HTML should equal html ', () => {
    assert.equal(getFileExt('doc.aosioao.HTML'), 'html')
  })
  it('doc. should return empty', () => {
    console.log('checking the result ', getFileExt(123))
    assert.equal(getFileExt(123), '')
  })
})
