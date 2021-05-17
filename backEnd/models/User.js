const mongoose =require ('mongoose');
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type :String,
        required:true,
    },
    email :String,
    phoneNumber :String,
    password : String,
    address :String,
    city:String,
    profession: String,
    aboutMe :String,
    photo :String,
    reviews : [{ 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'review'
         }],
    appointments : [{ 
     type: mongoose.Schema.Types.ObjectId,
     ref: 'appointment'
        }],
    category :{
        type: mongoose.Schema.Types.ObjectId,
        ref :'category'
    },
    role :{
        type :String,
        default :'user',
        enum :['user','professional','admin']
    }  ,
    accessToken :{
        type :String
    }

})
module.exports =User = mongoose.model('user',userSchema);