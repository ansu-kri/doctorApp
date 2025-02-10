const { UserModel } = require("../Model/UserModels");

const UserAdd=async(req,res)=>{
    const data = req.body
    console.log(`req.body: ${req.body}`);
    try {
        const newEmployee = await UserModel.create(data);
        console.log(newEmployee);
        res.send({newEmployee});
    } catch (err) {
        console.log(err);
        res.send({ "eror": "Something wrong" });
    }
   
}

module.exports={
    UserAdd
}