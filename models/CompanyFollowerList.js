const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CompanyFollowerSchema = new Schema({
  companyId: {
    type: String,
  },
  followers: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      userHandle: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = CompanyFollowerList = mongoose.model(
  'companyfollowerlist',
  CompanyFollowerSchema,
)
