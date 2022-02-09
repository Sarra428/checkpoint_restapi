const mongoose = require ('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.mongo_uri)
        console.log('db is connected')
    } catch (error) {
        console.log({msg:"db is not connected", error})
    }
}




module.exports = connectDb