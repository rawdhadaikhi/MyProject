const Appointment =require('../models/Appointment');

// add appointments for user
exports.AddNewAppoint = async (req,res) =>{
    const {title, dateStart , user} =req.body
    try{
        const newAppoint = new Appointment ({title, dateStart, user})
       await newAppoint.save()
        res.status(201).json(newAppoint);
    }
    catch(error){
        console.error(error)
        res.status(500).json({errors : error});
    }
}
exports.allAppoints = async (req,res) =>{
    try{
        const appoints = await Appointment.find({}).populate('user');
        res.status(201).json(appoints);
       }
       catch(error) {
         console.error(error)
         res.status(500).json({errors: error})
       }
}
// update appointments for users

 
// delete appointments for user
exports.deleteAppoint = async (req,res) => {
    try {
        const removeAppoint = await Appointment.findById(req.params.id); 
        removeAppoint.remove(); 
        res.json({message :'user deleted !'})
    }
    catch(error) {
        console.error(error);
        res.status(500).json({errors : error})
    }
}

// validate date of appointment for professional

// cancel date = delete for professional
