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

sequelize.sync({ alter: true, force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })  
});

// WOrk on python script to add values similar to the ones in the models to that database
// Get post to work for create post and save into database

// Figure out deployment
// Add gtag, fb pixel, adsense to page

// Begin replicating the layout