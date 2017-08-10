import fantasy from 'ramda-fantasy'

const Future = fantasy.Future

const convert = ({
   src,
   dest,
   options = []
}) => {
  return new Future((rej, res) => {

  })
}

export default {
  convert,
  name: 'urlToPdf'
}
