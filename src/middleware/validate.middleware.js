const express = require("express");
// const User = require("../models/user.model");

const varify_data = async (req, res, next) => {
    let emailverify = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let phoneverify = new RegExp("^[0-9]{10}$");
    if (req.body.email && emailverify.test(req.body.email) != true) {
        res.status(406).send({
            code: 406,
            message: "Email is not valid!",
        });
    } else if (req.body.phone && phoneverify.test(req.body.phone) != true) {
        res.status(406).send({
            code: 406,
            message: "Phone no. is not valid!",
        });
    }
    else next();
};

module.exports = { varify_data };
