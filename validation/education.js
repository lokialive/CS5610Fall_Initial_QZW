const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateEducationInput(data) {
  let errors = {}

  data.school = !isEmpty(data.school) ? data.school : ''
  data.degree = !isEmpty(data.degree) ? data.degree : ''
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : ''
  data.from = !isEmpty(data.from) ? data.from : ''

  if (Validator.isEmpty(data.school)) {
    errors.school = 'School field cannot by empty!'
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field cannot be empty!'
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Major cannot be empty!'
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'Start Date cannot be empty!'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
