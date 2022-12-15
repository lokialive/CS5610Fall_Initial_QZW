import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import profileReducer from './profileReducer'
import postReducer from './postReducer'
import companyReducer from "./companyReducer.js";
import companiesReducer from "./companiesReducer.js";
import positionReducer from "./Position-reducer.js";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  companies: companiesReducer,
  company: companyReducer,
  positions: positionReducer
})
