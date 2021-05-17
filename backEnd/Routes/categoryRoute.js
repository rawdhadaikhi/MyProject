const express = require('express');
const Router = express.Router();
const {AddCategory,UpdateCategory,deleteCategory} =require ('../controllers/categoryController');


Router.post('/newcategory',AddCategory);
Router.put('/updateCategory/:id',UpdateCategory)
Router.delete('/deleteCategory/:id',deleteCategory)


module.exports = Router;