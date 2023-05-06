const router = require('express').Router()

router.get('/', (req, res) => {
  // res.send('Home routes')
  res.render('home')
})

module.exports = router