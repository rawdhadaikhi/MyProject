const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    designation :{
        type :String,
        required :true,
        unique :true
    },
    users : [{
        type:mongoose.Schema.Types.ObjectId,
        ref :'user'
    }]
    

})
module.exports  = Category = mongoose.model('category',categorySchema);