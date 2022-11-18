const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const Profile = require('../../models/Profiles')
const User = require('../../models/User')

const validateProfileInput = require('../../validation/profile')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')

// $route  GET api/profile/test
// @desc   Return the json file got
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'profile works' })
})

// $route  GET api/profile
// @desc   Get the current user's profile
// @access private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {}
    Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'avatart'])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = 'Cannot find the user!'
          return res.status(404).json(errors)
        }

        res.json(profile)
      })
      .catch((err) => res.status(404).json(err))
  },
)

// $route  POST api/profile
// @desc   Create and edit personal information
// @access private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const profileFields = {}
    profileFields.user = req.user.id
    if (req.body.handle) profileFields.handle = req.body.handle
    if (req.body.company) profileFields.company = req.body.company
    if (req.body.website) profileFields.website = req.body.website
    if (req.body.location) profileFields.location = req.body.location
    if (req.body.status) profileFields.status = req.body.status

    if (req.body.bio) profileFields.bio = req.body.bio
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername

    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',')
    }

    profileFields.social = {}

    if (req.body.wechat) profileFields.social.wechat = req.body.wechat
    if (req.body.QQ) profileFields.social.QQ = req.body.QQ
    if (req.body.tengxunkt) profileFields.social.tengxunkt = req.body.tengxunkt
    if (req.body.wangyikt) profileFields.social.wangyikt = req.body.wangyikt

    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        // id user info exists, update it
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true },
        ).then((profile) => res.json(profile))
      } else {
        // If user info doesn't exist, create it.
        Profile.findOne({ handle: profileFields.handle }).then((profile) => {
          if (profile) {
            errors.handle =
              'The handle has already exists, please enter another handle!'
            res.status(400).json(errors)
          }

          new Profile(profileFields).save().then((profile) => res.json(profile))
        })
      }
    })
  },
)

// $route  GET api/profile/handle/:handle
// @desc   Get profile by handle
// @access public
router.get('/handle/:handle', (req, res) => {
  const errors = {}
  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'Cannot find the suer profile by handle'
        res.status(404).json(errors)
      }

      res.json(profile)
    })
    .catch((err) => res.status(404).json(err))
})

// $route  GET api/profile/user/:user_id
// @desc   Get user profile by user._id
// @access public
router.get('/user/:user_id', (req, res) => {
  const errors = {}
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatart'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'Cannot find the user profile by user._id'
        res.status(404).json(errors)
      }

      res.json(profile)
    })
    .catch((err) => res.status(404).json(err))
})

// $route  GET api/profile/all
// @desc   Get all developers profiles
// @access public
router.get('/all', (req, res) => {
  const errors = {}
  Profile.find()
    .populate('user', ['name', 'avatart'])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = 'No record...'
        res.status(404).json(errors)
      }

      res.json(profiles)
    })
    .catch((err) => res.status(404).json(err))
})

// $route  POST api/profile/experience
// @desc   Add experience
// @access Private
router.post(
  '/experience',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    Profile.findOne({ user: req.user.id }).then((profile) => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      }

      profile.experience.unshift(newExp)

      profile.save().then((profile) => res.json(profile))
    })
  },
)

// $route  POST api/profile/education
// @desc   Add Education
// @access Private
router.post(
  '/education',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    Profile.findOne({ user: req.user.id }).then((profile) => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      }

      profile.education.unshift(newEdu)

      profile.save().then((profile) => res.json(profile))
    })
  },
)

// $route  DELETE api/profile/experience/:epx_id
// @desc   Delete experience by experience id
// @access Private
router.delete(
  '/experience/:epx_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        const removeIndex = profile.experience
          .map((item) => item.id)
          .indexOf(req.params.epx_id)

        profile.experience.splice(removeIndex, 1)

        profile.save().then((profile) => res.json(profile))
      })
      .catch((err) => res.status(404).json(err))
  },
)

// $route  DELETE api/profile/education/:edu_id
// @desc   Delete education by education id
// @access Private
router.delete(
  '/education/:edu_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        const removeIndex = profile.experience
          .map((item) => item.id)
          .indexOf(req.params.epx_id)

        profile.education.splice(removeIndex, 1)

        profile.save().then((profile) => res.json(profile))
      })
      .catch((err) => res.status(404).json(err))
  },
)

// $route  DELETE api/profile
// @desc   Delete current user account
// @access Private
router.delete(
  '/education/:edu_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() => {
        res.json({ success: true })
      })
    })
  },
)

module.exports = router