const express = require("express");
const {UserUpdate} =require("../Controllers/patch")
const {UserModel} =require("../Model/UserModels")
const User =express.Router();
const { UserDelete}=require("../Controllers/delete");
const { UserAdd } = require("../Controllers/post");

User.patch("/edit/:id",UserUpdate)

User.delete("/delete/:id",UserDelete)

User.post("/addemployee",UserAdd)

module.exports={
    User
}