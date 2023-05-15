const router = require('express').Router()
const request = require('request')
const { Posts } = require('../models')

router.get('/', async (req, res) => {
  const postData = await Posts.findAll({ limit: 30 })
  const posts = postData.map((post) => post.get({ plain: true }))
  console.log(process.env.PORT)


  res.render('home', {posts, port: process.env.PORT})
})

router.get('/search', (req, res) => {
  res.render('search')
})

// router.post('search') 
// get query, pull from db, return results 

router.get('/finance', (req, res) => {
  const data = {
    cat: 'finance'
  }
  res.render('category', {data})
})

router.get('/crypto', (req, res) => {
  const data = {
    cat: 'crypto'
  }
  res.render('category', {data})
})

router.get('/finEd', (req, res) => {
  const data = {
    cat: 'finEd'
  }
  res.render('category', {data})
})

router.get('/image', (req, res) => {
  const imageUrl = req.query.url;
  if(!imageUrl) {
    res.status(400).send('Missing image URL')
    return
  }
  request.get(imageUrl).pipe(res)
} )

module.exports = router