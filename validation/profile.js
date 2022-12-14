const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateProfileInput(data) {
  let errors = {}

  data.handle = !isEmpty(data.handle) ? data.handle : ''

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle shodl between 2 and 40 letters!'
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field cannot be empty!'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
