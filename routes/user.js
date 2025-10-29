const express = require("express");
const router = express.Router();
const {User} = require("../models/model");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Register a new user
router.post("/", async (req, res) => {
  try {
    const {name, email} = req.body;

    const user = new User({name, email})
    const savedUser = await user.save()
    res.json({message: "Department saved successfully", savedUser:savedUser})
  } 
  catch (err){
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
