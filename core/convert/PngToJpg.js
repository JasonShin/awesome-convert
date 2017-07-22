import R from 'ramda'
import fantasy from 'ramda-fantasy'
import fs from 'fs'
import pngToJpg from 'png-to-jpeg'

const Future = fantasy.Future

/**
 * Converts png to jpg
 * @param src: path to source
 * @param dest: path to dest
 * @returns {*}
 */
const handler = (src, dest) => {
  return new Future((rej, res) => {
    const buffer = fs.readFileSync(src)
    try {
      pngToJpg({ quality: 90 })(buffer)
        .then(output => {
          if (!dest) {
            return res(output)
          } else {
            const writeResult = fs.writeFileSync(dest, output)
            return res(writeResult)
          }
        })
    } catch (e) {
      console.log('failed to create png to jpg!')
      return rej(e)
    }

  })
}

export default handler
