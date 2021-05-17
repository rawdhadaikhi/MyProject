const category = require('../models/Category');

// add category by admin
exports.AddCategory = async (req,res) =>{
    const {designation} = req.body;
    try{
      const newCategory = new category ({designation})
        const categoryadded= await newCategory.save();
      res.status(200).json(categoryadded);
    }
    catch(error){
        console.error(error);
        res.status(500).json({erros :error});
    }
}
// update category
exports.UpdateCategory = async (req,res) =>{
  const {designation} = req.body;
  try {
     const updatedcategory = await category.findById(req.params.id)
     updatedcategory.designation = designation;
     const uc = await updatedcategory.save();
     res.status(201).json(uc);
  }
  catch(error){
       console.error(error)
       res.status(500).json({errors :error});
  }
}
// delete category
exports.deleteCategory = async (req,res) =>{
  try {
    const removedcategory = await category.findById(req.params.id);
    removedcategory.remove();
    res.status(201).json(removedcategory);
  }
  catch(error){
     console.error(error);
     res.status(500).json({errors : error})
  }
}