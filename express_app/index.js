const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path');
// const session = require('express-session');
const app = express()
const sequelize = require('./config/connection')

const port = 8080
const hbs = exphbs.create()

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/'));

// sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})