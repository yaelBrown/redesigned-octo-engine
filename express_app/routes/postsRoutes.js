const router = require('express').Router()
const PostService = require('../services/postsService')

const ps = new PostService()

router.get('/', (req, res) => {
  res.render('post')
})

if (process.env.NODE_ENV === "development") {
  router.get('/create', (req, res) => {
    res.render('create')
  })
}

module.exports = router
