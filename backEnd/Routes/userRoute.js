const express = require('express');
const { register,
     login ,
     getAllProfissionalCard,
     getProfessionalByName,
     getProfessionalByCategory, 
     getOneProfessional,
     updateProfile} = require('../controllers/userController');

const { registerRules, validator, loginRules } = require('../middlewares/validator');
const Router = express.Router();
const isAuth = require('../middlewares/passport-setup');

// first route : register user
Router.post('/register', registerRules(),validator,register)

// router login :
Router.post('/login',loginRules(),login)
Router.get('/current',isAuth(),(req,res) => res.json(req.user));
Router.put('/profile',isAuth(), updateProfile);

// all cards 
Router.get('/all',getAllProfissionalCard);

//get card by name
Router.get('/visit-profile/:id',getOneProfessional)

Router.get('/users/:firstName', getProfessionalByName)

// get professional by category
Router.get('/category/:profession',getProfessionalByCategory)

// add review to an existing users
// Router.post('/user/:id',addReviewUser)
module.exports = Router;