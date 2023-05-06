const express = require('express')
const path = require('path');
// const session = require('express-session');
const app = express()
const sequelize = require('./config/connection')

const port = 8080

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