const router = require('express').Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
  const postData = await Posts.findAll({ limit: 30 })
  const posts = postData.map((post) => post.get({ plain: true }))

  res.render('home', {posts})
})

module.exports = router