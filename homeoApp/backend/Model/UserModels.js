const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    // name:String,
    // password:String,
    // age:String,
    // address:String,
    // employeeID:String,
    // email:String,
    // dateofjoining:Number,
    // phonenumber:Number,
    // position:String,
    // department:String,
    // gender:String,
    email:String,
    enterPassword:String,
    confirmPassword:String,
})

const UserModel=mongoose.model("Login",UserSchema)

module.exports={
    UserModel
}

