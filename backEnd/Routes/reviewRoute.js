const express = require('express');
const {AddReview,getReviews} = require('../controllers/reviewController');
// const {reviewRules} = require ('../middlewares/validator')

const Router = express.Router();

Router.post('/newreview',AddReview);
Router.get('/reviews/',getReviews)

module.exports = Router;