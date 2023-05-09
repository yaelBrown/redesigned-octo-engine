const router = require('express').Router()
const multiparty = require('multiparty')
const PostService = require('../services/postsService')

const ps = new PostService()

router.get('/', (req, res) => {
  res.render('post')
})

if (process.env.NODE_ENV === "development") {
  router.get('/create', (req, res) => {
    res.render('create')
  })

  router.post('/create', (req, res) => {
    const form = new multiparty.Form()
    form.parse(req, (err, fields, files) => {
      if (err) new Error(`Error Handling the POST ${err.message}`)
      console.log({fields, files})
      res.render('create')
    })
  })
}

module.exports = router
