const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
  },
  skills: {
    type: [String],
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
  experience: [
    {
      current: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: String,
        require: true,
      },
      to: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      current: {
        type: Boolean,
        default: true,
      },
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      fieldofstudy: {
        type: String,
        required: true,
      },
      from: {
        type: String,
        require: true,
      },
      to: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    wechat: {
      type: String,
    },
    QQ: {
      type: String,
    },
    tengxunkt: {
      type: String,
    },
    wangyikt: {
      type: String,
    },
  },
  type: {
    type: String,
  },

  companyName: {
    type: String,
  },
  industry: {
    type: String,
  },
  phone: {
    type: String,
  },
  year_founded: {
    type: String,
  },
  work: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
  followed: [
    {
      companyName: {
        type: String,
      },
      companyId: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
