const mongoose = require('mongoose');
const appointmetSchema = mongoose.Schema({
     title: String,
    dateStart :{
        type :Date,
        required :true
    },
    user : { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'user'
         }

})
module.exports = Appointment =mongoose.model('appointment',appointmetSchema)