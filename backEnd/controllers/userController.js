// call back function register
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const review = require('../models/Review');

const secretOrKey = config.get("secretOrKey");
exports.register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    address,
    city,
    profession,
    role
  } = req.body;
  try {
    // validate email was unique
    const searchRes = await User.findOne({ email });
    console.log(searchRes);
    if (searchRes)
      return res.status(401).json({ msg: `user is already exists !!` });
    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      address,
      city,
      profession,
      role
    });
    // crypt the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    //save user
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};

//  call back function login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(`password`, password);
  try {
    // get one user
    const user = await User.findOne({ email });
    // console.log(`user`, user);
    if (!user) return res.status(404).json({ msg: `user not found !` });
    console.log(user.password,password)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: ` password not matched` });
    const payload = {
      id: user._id,
      email: user.email,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}`,user:user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};
//get all professional cards 
exports.getAllProfissionalCard = async (req,res) =>{
  try{
   const professionals = await User.find({});
   res.status(201).json(professionals);
  }
  catch(error) {
    console.error(error)
    res.status(500).json({errors: error})
  }
}
// get cards by name
exports.getProfessionalByName = async (req,res) =>{
  try{
    const prof= await User.find({firstName :req.params.firstName})
    res.status(201).json(prof);
  }
  catch(error){
      console.error(error);
      res.status(500).json({errors :error});
  }
}

// get cards by category   // endpoint to update
exports.getProfessionalByCategory = async (req,res) =>{
  try{
    const found= await User.find({profession:req.params.profession}).populate('category')
    res.status(201).json(found);
  }
  catch(error){
    console.error(error)
    res.status(500).json({errors: error})
  }
}

exports.getOneProfessional = async (req,res) =>{
  const cardId = req.params.id;
  // console.log(cardId)
  try{
   const found = await User.findById({_id :cardId})
   res.status(200).json(found);
  }
  catch(error){
    console.error(error)
    res.status(500).json({errors: error})
  }
}

exports.updateProfile = async (req,res) =>{
  const user = await User.findById(req.user._id)
  if (user) {
    user.firstName = req.body.firstName 
    user.lastName = req.body.lastName 
    user.email = req.body.email
    user.password = req.body.password 
    user.phoneNumber = req.body.phoneNumber
    user.address = req.body.address
    user.city = req.body.city
  }
  try{
    const updatedUser = await user.save()
    res.status(200).json(updatedUser)
  }catch(error){
    console.error(error)
    res.status(500).json({errors: error})
  }
  }
 
 
// add review to an existing user 
// exports.addReviewUser = async (req,res) =>{
//   const {description,dateReview} = req.body;
//   try{
//     const addedreview = new review({description,dateReview})
//     await addedreview.save();
//     const userexist = User.findOneAndUpdate({_id:req.params.id},{$push :{reviews :addedreview._id}},{new:true})
//     await userexist.save();
//     res.status(200).json(userexist)
//   }
//   catch(error){
//     console.error(error);
//     res.status(500).json({errors : error })
//   }
// }

// update profile for all

// card controller
// add card for professionals

// update card for professionals

//delete card for professionals


