const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const sequelize = require('./config/connection')
const app = express()

const port = process.env.PORT || 8080
const hbs = exphbs.create()

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())
app.use(compression())

app.use(require('./routes/'));
app.use((req, res) => res.status(404).render('404'))
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).render('500')
})

sequelize.sync({ alter: false, force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })  
});


// setup file upload to s3 bucket. 

// Work on python script to add values similar to the ones in the models to that database

// Figure out deployment
// Add gtag, fb pixel, adsense to page

// Begin replicating the layout