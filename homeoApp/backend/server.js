// const http = require("http")
// const fs = require("fs")

// //Now we create server

// // console.log(http)

// const server = http.createServer((request,response)=>{
//     if(request.url==="/"){
//         response.end("home page")
//     }else if(request.url==="/data"){
//         fs.readFile("./data.json",(err,data)=>{
//             if(err){
//                 response.write(err)
//                 response.end()
//             }else{
//                 response.end(data)
//             }
//         })
//         // response.end("Data is here")
//         //how can be read the file
//     }else if(request.url==="/reports"){
//         response.setHeader("Content-type","text/html")
//         // response.end("reports is here")
//         response.end("<h1>Report is here</h1>")
//     }else{
//         response.end(" No end point")
//     }
// })

// //to run the server, where the usb is plugend that is port

// server.listen(4500,()=>{
//     console.log("The server is running at port 4500")
// })






const cors=require("cors")
const { connection } = require("./Configs/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./Model/UserModels") 
const {User} =require("./Routes/UserRoutes")


const express = require("express")

const app = express()
app.use(express.json())
app.use("/user",User)
app.use(cors())

app.get("/alluser",async(req,res)=>{
    const data=await UserModel.find()
    res.send(data)
})

app.get("/", (req, res) => {
    res.send("Welcome page")
})

app.get("/employee", (req, res) => {
    res.send("Data of all the employee")
})


app.post("/addemployee", async (req, res) => {
    const data = req.body
    console.log(`req.body: ${req.body}`);
    try {
        const newEmployee = await UserModel.create(data);
        console.log(newEmployee);
        res.send("Added the Employee");
    } catch (err) {
        console.log(err);
        res.send({ "eror": "Something wrong" });
    }
    // const employee = new UserModel(data)
    // await employee.save()
    // console.log(employee)
    // res.send("Added the employee")
})

app.patch("/edit/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    console.log(`req.params.id: ${req.params.id}`)
    try {
        await UserModel.findByIdAndUpdate(ID, {
            name: "Sridhar",
            age: "35",
            address: "Karnataka",
            employeeID: "CV00135",
            mail: "sridhar@gmail.com",
            dateOfJoining: "31-01-2023",
            dateOfBirth:"03-01-1988",
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
})

app.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    console.log(`req.params.id: ${req.params.id}`);
    try {
        await UserModel.findByIdAndDelete(ID);
        res.send('delete the employee');
    } catch (err) {
        console.log(err);
        res.send({ "error": "Something wrong" });
    }
});

app.post("/totalEmployee",(req,res)=>{
    res.send("total employee is added")
})



app.post("/employeefolder", async (req, res) => {
    console.log("data is added")
})





app.listen(4500, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch (err) {
        console.log("error while connecting db")
        console.log(err)
    }
    console.log("server is running on port 4500")
})