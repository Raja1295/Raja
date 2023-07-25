const express = require("express")
const model = require("../model/Accountmodel");



exports.postAccount=async (req, res)=> {
    const data = model({
        Serialnumber: req.body.Serialnumber,
        Holdername: req.body.Holdername,
        Discription: req.body.Discription,
        Total: req.body.Total
    });
    try {
        const dataToSave = await data.save();
        res.status(201).json(dataToSave);
    }
    catch (error) {
        res.status(400).json((error.message))
    }
};
exports.getAccount = (async(req, res) => {
    try{
        const data = await model.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ massage: error.message })
    }
});





