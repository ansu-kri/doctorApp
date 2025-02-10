const { UserModel } = require("../Model/UserModels");

const UserDelete=async(req,res)=>{
    const ID = req.params.id;
    console.log(`req.params.id: ${req.params.id}`);
    try {
        await UserModel.findByIdAndDelete(ID);
        res.send('delete the employee');
    } catch (err) {
        console.log(err);
        res.send({ "error": "Something wrong" });
    }
}

module.exports={
    UserDelete
}
