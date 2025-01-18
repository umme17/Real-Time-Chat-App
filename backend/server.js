import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// app.get("/",(req,res) =>{
//     res.send("Server is Running Dude, Hello ");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT,() => {
    console.log(`server Running on port  ${PORT}`);
    connectToMongoDB();
});
