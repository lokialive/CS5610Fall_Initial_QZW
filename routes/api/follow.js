const express = require('express')
const router = express.Router()

const CompanyFollowerList = require('../../models/CompanyFollowerList')

// $route  GET api/follow/test
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
      res.json(followerList.followers)
    })
    .catch((err) => res.status(404).json(err))
})

router.post('/add/:id/:userId/:userHandle', (req, res) => {
  CompanyFollowerList.findOne({ companyId: req.params.id }).then((list) => {
    if (list && list.followers) {
    } else {
      //create a new
      const newList = new CompanyFollowerList({
        companyId: req.params.id,
        followers: [],
      })

      newList.save()
    }
  })
  CompanyFollowerList.findOne({ companyId: req.params.id }).then((list) => {
    const newFollower = {
      userId: req.params.userId,
      userHandle: req.params.userHandle,
    }
    list.followers.unshift(newFollower)

    list.save().then((list) => res.json(list))
  })
})

module.exports = router
