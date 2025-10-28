const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  location: { type: String },
  dateJoined: { type: Date, default: Date.now }
});


const productSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  subCategory:{type: String},
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  images: [{ type: String }],
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Product", productSchema);


module.exports = {User,Product};