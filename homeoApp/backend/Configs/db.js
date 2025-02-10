
const env=require("dotenv")
env.config()
const mongoose=require("mongoose")

const connection=mongoose.connect(process.env.url)


module.exports={
    connection
}