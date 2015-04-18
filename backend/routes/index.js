var express = require('express');
var User = require('./models/user');
var Loan = require('./models/loan');

var router = express.Router();

/* root route */
router.get('/', function(req, res) { 
    res.json({
        'status' : true
    });
});

router.get('/:username/:asdf', function(req, res){
    res.json({
        'status' : true, 
        'message' : req.params.username + " " + req.params.asdf

    });
});

module.exports = router;
