var express = require('express');
var router = express.Router();

const usuarios = require('../lib/users.json');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usuarios);
});

router.post('/auth', function(req, res, next){
  const {body,} = req;
  const {userName, password} = body;
  var logado = false;
  var item = null;
  usuarios.forEach(element => { 
  var userData =  element;
  if(userName == userData.user || userName == userData.email) {
    if(password == userData.password) {
      logado = true;
      item = userData;
    }
  } 
  });
  res.json({
    logado: logado,
    item: item
  })
});

module.exports = router;
