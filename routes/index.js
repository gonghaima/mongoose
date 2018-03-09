var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET New Note page. */
router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});

/* POST New Note page. */
router.post('/newnote', function(req, res) {
  return standupCtrl.create(req, res);
});

module.exports = router;
