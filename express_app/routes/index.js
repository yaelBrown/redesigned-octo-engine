const router = require('express').Router()

const homeRoutes = require('./homeRoutes')
const postsRoutes = require('./postsRoutes')

router.use('/', homeRoutes)
router.use('/posts', postsRoutes)

module.exports = router