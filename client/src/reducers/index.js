import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import errorReducer from './errorReducer.js'
import profileReducer from './profileReducer.js'
import postReducer from './postReducer.js'
import companyReducer from './companyReducer.js'
import companiesReducer from './companiesReducer.js'
import followerReducer from './followerReducer.js'

import positionsReducer from './Position-reducer.js'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  companies: companiesReducer,
  company: companyReducer,
  followers: followerReducer,
  positions: positionsReducer,
})
