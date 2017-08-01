import R from 'ramda'

/**
 * Checks file ext and returns correct file ext otherwise just returns false
 * @param file
 */
const getFileExt = (file) => R.compose(
  R.ifElse(
    (f) => typeof f === 'string' && /\.\w+$/.test(f),
    R.compose(
      R.toLower,
      R.last,
      R.split('.')
    ),
    () => false
  )
)(file)

export default getFileExt
