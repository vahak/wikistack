const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const { db } = require('./models');

// db.authenticate()

// then(() => {
//   console.log('connected to the database');
// })

app.get('/', function(req, res){
  res.send(layout());
});

const init = async () => {
  await models.User.sync()
  await models.Page.sync()

  yourExpressAppVar.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
app.listen(3000);
