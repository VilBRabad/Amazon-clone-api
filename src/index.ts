import dotenv from "dotenv";
import connectDb from "./db";
import {app} from "./app"

dotenv.config();


const port = process.env.PORT || 8000;

connectDb()
.then(()=>{
    app.listen(port, ()=>{
        console.log("Server running...");
    })
})
.catch((error)=>{
    console.log("Database connection error: ", error);
})
