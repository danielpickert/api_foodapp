const express = require('express')
const router = express.Router()
const User = require('../db/models')
const passport = require('../passport')

router.post('/', (req, res) => {
  console.log('user signup')
  console.log(req.body)

  const { username, password } = req.body

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      })
    } else {
      const newUser = new User({
        username: username,
        password: password
      })
      newUser.save((err, savedUser) => {
        if (err) return res.json(err)
        res.json(savedUser)
      })
    }
  })
})

router.post('/login',
  function (req, res, next) {
    console.log('user login');
    console.log(req.body)
    next()
  },
  passport.authenticate('local', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('logged in', req.user);
    // const userInfo = {
    //   username: req.user.username
    // };
    // res.send(userInfo);
    res.redirect('/')
  }
)

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

module.exports = router
