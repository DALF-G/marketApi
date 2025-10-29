const express = require("express");
const router = express.Router();
const {Category} = require("../models/model");

// Get all categories
router.get("/", async (req, res) => {
  try{
  const categories = await Category.find();

  res.json({categories});
  }
  catch (err){
    res.status(500).json({message: err.message});
  }
});

// Add a new category
router.post("/", async (req, res) => {
  try {
    const {name} = req.body;
    const category = new Category({name});
    const savedCategory = await category.save()

    res.json({message: "Category saved successfully", savedCategory :savedCategory})
  }
   catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
