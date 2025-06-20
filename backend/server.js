import express from "express"
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv"
import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config()
const app = express();

const port=process.env.PORT||4000

app.use("/api/auth" , authRoutes)

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
  connectMongoDB();
})