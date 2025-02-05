import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import path from "path";
import productRoutes from "./routes/product.route.js"

dotenv.config(); 

const app =express();
const PORT = process.env.PORT || 5000

const __dirmname = path.resolve();

app.use(express.json());  //alloes us to  accept json  data in rq.body

app.use("/api/products",productRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirmname, "/frontend/dist")));

    app.get("*",(req, res)=>{
        res.sendFile(path.resolve(__dirmname, "frontend", "dist", "index.html"));
    });
}


app.listen(PORT, () =>{
    connectDB();
    console.log("server started at http://localhost:"+PORT);
});