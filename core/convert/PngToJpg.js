import R from 'ramda'
import fantasy from 'ramda-fantasy'
import fs from 'fs'
import pngToJpg from 'png-to-jpeg'

const Future = fantasy.Future

/**
 * Converts png to jpg
 * Supported:
 * 1) file system src -> dest conversion
 * @param src: path to source
 * @param dest: path to dest
 * @param quality: quality of converted image
 * @returns {*}
 */
const handler = ({
  src,
  dest,
  quality = 90,
}) => {
  return new Future((rej, res) => {
    const buffer = fs.readFileSync(src)
    try {
      pngToJpg({ quality })(buffer)
        .then(output => {
          if (!dest) {
            return res(output)
          } else {
            const writeResult = fs.writeFileSync(dest, output)
            return res(writeResult)
          }
        })
    } catch (e) {
      return rej(e)
    }

  })
}

export default handler
