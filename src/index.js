// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import { error } from "console";

import { app } from "./app.js"
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
});

connectDB()// jab bhi ek asynchronous method complete hota hai to wo ek promise return krta hai.
.then(()=>{
    app.on("error", ()=>{ //RAKH SAKTA HOON....RAKHNA CHAHIYE BASICALLY
        console.error("ERROR:",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listening on ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed", err);
});





































/*
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", ()=>{
            console.error("ERROR:",error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:",error);
        throw error
    }
})()
*/