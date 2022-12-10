const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateProfileInput(data) {
  let errors = {}

  data.handle = !isEmpty(data.handle) ? data.handle : ''
  data.status = !isEmpty(data.status) ? data.status : ''
  data.skills = !isEmpty(data.skills) ? data.skills : ''

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle shodl between 2 and 40 letters!'
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field cannot be empty!'
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field cannot be empty!'
  }


  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field cannot be empty!'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
