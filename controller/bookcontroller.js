

const express = require("express");
const model = require("../model/bookmodel");
const { Model } = require("mongoose");

const router = express.Router();


const postbook = async (req, res) => {
    const data = model({
        bookname: req.body.bookname,
        authorname: req.body.authorname,
        discription: req.body.discription,
        price: req.body.price
    });
    try {
        const dataToSave = await data.save();
        res.status(201).json(dataToSave);
    }
    catch (error) {
        res.status(400).json((error.message))
    }
};
const getbook = async (req, res) => {
    try {
        const data = await model.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ massage: error.message })
    }
};
const getbybookname = async (req, res) => {
    try {
        const data = await model.find({ bookname: req.params.id })
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ massage: error.message })
    }
}
const getbyauthorname = async (req, res) => {
    try {
        const data = await model.find({ authorname: req.params.id })
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ massage: error.message })
    }
}
const updatebook = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookname, authorname, discription, price } = req.body;
        const data = await model.findByIdAndUpdate(id, { bookname, authorname, discription, price }, { new: true });
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ massage: error.message })
    }
}
const deletebook = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await model.findByIdAndDelete(id)
        res.send("Book Details deleted sucessfully");
    }
    catch (error) {
        res.status(500).json({ massage: error.message })
    }
}




module.exports = { postbook, getbook, getbybookname, getbyauthorname, updatebook, deletebook };

