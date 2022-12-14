const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CompanyFollowerSchema = new Schema({
  companyId: {
    type: String,
  },
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = CompanyFollower = mongoose.model('CompanyFollower', CompanyFollowerSchema)
