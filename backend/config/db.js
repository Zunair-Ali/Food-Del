import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://zunairliaqatali02:Zunair1090$@cluster0.bedzrrn.mongodb.net/').then(()=>console.log('DB Conected'));
}