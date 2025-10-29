const express = require("express");
const router = express.Router();
const Product = require("../models/model");

// Get all products
router.get("/", async (req, res) => {
  try{
  const products = await Product.find().populate("seller category");
  res.json({products});
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
});

// Post new product
router.post("/", async (req, res) => {
  try {
    const {title, description} = req.body;

    const product = new Product({title, description})
    const savedProduct = await product.save()

    res.json({message: "Department saved successfully", savedProduct: savedProduct})
  } 
  catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
