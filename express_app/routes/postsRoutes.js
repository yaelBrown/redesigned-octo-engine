const router = require('express').Router()
const multiparty = require('multiparty')
const PostService = require('../services/postsService')
// const Post = require('../models/postsModel')

const ps = new PostService()
const Posts = require('../models/index').Posts

router.get('/', (req, res) => {
  res.render('post')
})

router.get('/:id', async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id)

    if (postData) {
      const post = postData.get({ plain: true })
      res.render('post', { post })
    } else {
      res.status(404).render('post')
    }
  } catch(err) {
    throw new Error(`Error getting post from database: ${err}`)
  }
})

if (process.env.NODE_ENV === "development") {
  router.get('/create', (req, res) => {
    res.render('create')
  })

  router.post('/create', (req, res) => {
    const form = new multiparty.Form()
    form.parse(req, async (err, fields, files) => {
      if (err) new Error(`Error Handling the POST ${err.message}`)
      const FAKE_NAMES = [
        "Patty Sleeman",
        "Andrea Risby",
        "Hermione Boulsher",
        "Larry Churchard",
        "Ethelind Laughlin"
      ]
      
      await Posts.create({
        title: fields.title[0],
        summary: fields.summary[0],
        content: fields.content[0],
        post_tyle: fields['post-type'][0],
        author: FAKE_NAMES[Math.round(Math.abs(Math.random() * 4))],
        image: ''
      })

      res.render('create')
    })
  })
}

module.exports = router
