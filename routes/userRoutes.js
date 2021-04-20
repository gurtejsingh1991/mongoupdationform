  
var express = require('express');

var myctrl = require('../controller/userController');
var approute=express.Router();

approute.post('/newUser',myctrl.addnew);
approute.get('/allusers',myctrl.getAll);
approute.get('/selectRecord/:userid',myctrl.selectedData);
approute.put('/updateRecord/:id',myctrl.updatedData);

module.exports = approute;