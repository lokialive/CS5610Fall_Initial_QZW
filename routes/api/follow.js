const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const CompanyFollowerList = require('../../models/CompanyFollowerList')
const User = require('../../models/User')

// $route  GET api/profile/test
// @desc   Return the json file got
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'company followers works' })
})

//GEt all followers by companyId
router.get('/:companyId', (req, res) => {
  const errors = {}
  CompanyFollowerList.findOne({ companyId: req.params.companyId })
    .then((followerList) => {
      res.json(followerList)
    })
    .catch((err) => res.status(404).json(err))
})

router.post(
  '/:id/:userId/::userHandle',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    CompanyFollowerList.findOne({ user: req.user.id }).then((list) => {
      if (list) {
      } else {
        //create a new
        const newCompany = new CompanyFollowerList({
          companyId: req.params.id,
          followers: [],
        })

        newCompany.save()
      }
    })
    CompanyFollowerList.findOne({ user: req.user.id }).then((list) => {
      const newFollower = {
        userId: req.params.userId,
        userHanlde: req.params.userHanlde,
      }
      list.followers.unshift(newFollower)

      list.save().then((list) => res.json(list))
    })
  },
)

module.exports = router
