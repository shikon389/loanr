var express = require('express');
var User = require('../models/user');
var Loan = require('../models/loan');

var router = express.Router();

/* root route */
router.get('/', function(req, res) { 
    res.json({
        'status' : true
    });
});

/* get user */
router.get('')


module.exports = router;
