const express = require('express');
const connectDB = require('./config/dbConnect');
const user = require('./Routes/userRoute');
const review =require('./Routes/reviewRoute');
const  category = require('./Routes/categoryRoute');
const  bookingRoute = require('./Routes/bookingRoute');
const app = express();
app.use(express.json());
connectDB();


app.use('/user',user);
//review
app.use('/review',review)
// category
app.use('/category',category)
 //appointment
app.use('/appointment',bookingRoute)

const PORT = process.env.PORT || 5000;


app.listen(PORT , (err) => {
    err ? console.log(err) : console.log(`server is running on port ${PORT}`);
});

