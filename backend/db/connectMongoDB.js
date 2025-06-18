import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)

    console.log("mongoDB connected", connect.connection.host)
  }
  catch (error) {
    console.log("Error  connecting in mongoDB",error.message)
  }
}

export default connectMongoDB