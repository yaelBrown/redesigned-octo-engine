const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
// const session = require('express-session');
const app = express()
const sequelize = require('./config/connection')

const port = process.env.PORT || 8080
const hbs = exphbs.create()

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())
app.use(compression())

app.use(require('./routes/'));

// sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Finish setting up models
// Create placeholder page for creating posts (dev only)
// Figure out deployment
// Add gtag, fb pixel to page
// Begin replicating the layout