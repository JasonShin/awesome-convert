import getFileExt from '../helper/getFileExt'
import imageMagick from './ImageMagick'
import htmlPdf from './HtmlPdf'
// Describe what is supported by which converter
// In order of document group -> type (from) -> type (to)
const conversions = {
  images: {
    jpg: {
      jpg: null,
      png: 'gm',
      pdf: 'gm',
      tiff: 'gm'
    },
    png: {
      png: null,
      jpg: 'gm',
      tiff: 'gm'
    }
  }
}

const handlers = [
  imageMagick,
  htmlPdf
]

const getHandler = ({
  src,
  dest,
  options
}) => {

  const srcExt = getFileExt(src)
  const destExt = getFileExt(dest)
}
