const express = require("express");
const User = require("../model/Usermodel");
const bcrypt = require("bcryptjs");

exports.get = (req, res)=> res.json("Api Tested");

exports.signup = async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = await User.create({
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(201).json({user: newUser});
      console.log("User saved successfully");
    } catch (err) {
      res.status(500).json({message: "Something went wrong"});
      console.log(err)
    }
  };
  exports.login = async (req, res) => {
    try {
      existingUser= await User.findOne({ email: req.body.email });
      if (!existingUser) {
        return res.status(400).json({ message: "User not found please signup" });
      }
      const correctpassword = await bcrypt.compare(req.body.password, existingUser.password);
      if(!correctpassword){
        return res.status(400).json({message:"email or password wrong"})
      }
      res.status(201).json({message: "Successfully logged in"});
    } catch (err) {
      res.status(500).json({message: "Something went wrong"});
      console.log(err)
    }
  };
exports.logout = async (req, res) => {
  try{
    token= await User.findOne({ email: req.body.email });
      if (!token) {
        return res.status(400).json({ message: "No Token found" });
      }
    res.clearCookie();
    return res.status(200).json({message: "Successfully Logout"});
  }
  catch(err){
    res.status(500).json({message:"went wrong"});
    console.log(err)
  }
}
exports.getallUser = async (req, res) =>{
  try{
    const user =await User.find()
    res.json(user)
  }
  catch(err){
      res.status(500).json({message:"went wrong"});
      console.log(err)
  }
}
exports.getUser = async (req, res) =>{
  try{
    const user =await User.findById(req.params.id)
    res.json(user)
  }
  catch(err){
      res.status(500).json({message:"went wrong"});
      console.log(err)
  }
}
exports.Userupdate = async (req, res) =>{
  try{
  const { id } = req.params;
  const {username, DoB } = req.body;
  const user = await User.findByIdAndUpdate(id,{username,DoB},{new:true});
  res.status(400).json({message:"Update Successfully"});
  }
  catch(err){
    res.status(500).json({message:"went wrong"});
    console.log(err)
  }
}
exports.Userdelete = async (req, res) =>{
  try{
  const { id } = req.params;
  const user =await User.findByIdAndDelete(id);
  res.status(400).json({message:"User Deleted Successfully"});
  }
  catch(err){
    res.status(500).json({message:"went wrong"});
    console.log(err)
  }
}





