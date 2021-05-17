const review = require('../models/Review');
const user = require('../models/User');

// add review
exports.AddReview = async (req,res) =>{
    const {description,dateReview ,user} =req.body;
    try {
        const newReview= new review ({description,dateReview,user});
         await newReview.save();
       res.status(200).json(newReview);
    }
    catch(error){
      console.log(error);
      res.status(500).json({errors: error});
    }
}
// get all reviews of user
exports.getReviews = async (req, res) =>{
  try{
      const us = await review.find({}).populate('user')
      res.status(200).json(us)
  }
  catch(error){
    console.error(error);
    res.status(500).json({errors: error});
  }
}
