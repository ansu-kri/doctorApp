const { UserModel } = require("../Model/UserModels");

const UserUpdate = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    console.log(`req.params.id: ${req.params.id}`)
    try {
        await UserModel.findByIdAndUpdate(ID, {
            name: "Sridhar",
            age: "35",
            address: "Karnataka",
            employeeID: "CV00135",
            mail: "sridhar@gmail.com",
            dateOfJoining: "31-01-2023",
            phoneNumber: "9135880905",
            department: "IT",
            position: "Software Developer",
            gender: "Male",
        }, { new: true })
        res.send("update the data of employee");
    } catch (err) {
        console.log(err)
        res.send({ "error": "Something wrong" })
    }
}

module.exports={
    UserUpdate
}