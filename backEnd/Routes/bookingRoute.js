const express = require('express');
const Router = express.Router()
const {AddNewAppoint,allAppoints ,deleteAppoint} = require('../controllers/appointmentController');


Router.post('/newappoint',AddNewAppoint);
 Router.get('/appoints',allAppoints);
 Router.delete('/removeAppoint/:id',deleteAppoint);


module.exports = Router