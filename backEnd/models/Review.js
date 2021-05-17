const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    description: {
        type:String,
       
    },
    dateReview :{
        type :Date,
    },
    user : { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'user'
         }

})
module.exports = Review =mongoose.model('review',reviewSchema)