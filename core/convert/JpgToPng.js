import gm from 'gm'
import fanstasy from 'ramda-fantasy'

const Future = fanstasy.Future

/**
 *
 * @param src
 * @param dest
 * @param quality
 */
const handler = ({
  src,
  dest,
  quality = 90
}) => {
  return new Future((rej, res) => {
    gm(src)
      .quality(quality)
      .write(dest, (err) => {
        if (err) {
          return rej(err)
        }
        return res()
      })
  })
}

export default handler
