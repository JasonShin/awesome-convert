import fantasy from 'ramda-fantasy'
import pdf from 'html-pdf'

const Future = fantasy.Future

const handler = ({
  src,
  dest,
  options = [],
}) => {
  return new Future((rej, res) => {
    pdf.create(html, options).toFile(dest, (err, result) => {
      if (err) {
        return rej(err)
      }
      return res(result)
    })
  })
}
