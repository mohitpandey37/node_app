const express = require('express');
const mongoose = require("mongoose");
const User = require('../../models/users.models')

const userController = {
    async createUser(req, res) {
        try {
            const user = {
                name: req.body.name,
                designation: req.body.designation,
                email: req.body.email,
                phone: req.body.phone,
                createdAt: new Date(),
                updatedAt : new Date()
            };
            let data = {};
            data = await User(user).save();
            let result = {
                message: "Data Saved Successfully.",
                data: data,
            };
            res.status(201).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getAllUsers(req, res) {
        let limit = req.query.limit ? parseInt(req.query.limit) : 10;
        let page = req.query.page ? parseInt(req.query.page) : 1;
        let skip = (page > 1) ? ((page - 1) * limit) : 0
        try {
            let data = await User.find().skip(skip).limit(limit);
            
            let result = {
                message: "Data Retrieved Successfully.",
                data: data,
            };
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async get_user(req, res) {
        let data = await User.findById({
            _id: new mongoose.Types.ObjectId(req.params["id"]),
        });
        let result = {
            message: "Data Retrieved Successfully.",
            data: data,
        };
        res.status(200).send(result);
    },

    async updateuser(req, res) {
        try {
            let data = await User.findByIdAndUpdate(
                new mongoose.Types.ObjectId(req.params["id"]),
                { $set: req.body }
            );
            res.status(200).send({
                message: "Data saved successfully.",
            });
        } catch (err) {
            res.send(err);
        }
    },

    async removeUser(req, res) {
        try {
            let data = await User.findByIdAndDelete(
                new mongoose.Types.ObjectId(req.params["id"])
            );
            res.status(200).send({
                message: "Data Removed Successfully.",
            });
        } catch (err) {
            res.status(404).send(err);
        }
    },

}
module.exports = userController;