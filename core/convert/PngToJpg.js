import R from 'ramda'
import fantasy from 'ramda-fantasy'
import fs from 'fs'
import pngToJpg from 'png-to-jpeg'

const Future = fantasy.Future

const handler = (path) => {
  return new Future((rej, res) => {
    const buffer = fs.readFileSync(path)
    pngToJpg({ quality: 90 })(buffer)
      .then(output => {
        return res(output)
      })
  })
}

export default handler
