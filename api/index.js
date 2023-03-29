import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import orderRoutes from "./routes/order.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/order", orderRoutes)


app.listen(3000, ()=>{
    console.log("Connected!!")
})