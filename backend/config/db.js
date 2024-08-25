import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:Urmylife24@cluster0.342ib.mongodb.net/SaveZoneWeb').then(()=>console.log("DB Connected"));
}