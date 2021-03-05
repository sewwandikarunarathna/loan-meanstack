var express = require('express');
const User = require('../models/user');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


router.post('/register', function(req, res, next) {
  addToDB(req, res);
});

async function addToDB(req, res){
  var user = new User({
  email: req.body.mail,
  name: req.body.name,
  password: User.hashPassword(req.body.password),
  creation_dt: Date.now()

  });

  try{
    doc = await user.create();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}
module.exports = router;
