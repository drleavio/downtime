import mongoose from "mongoose"
import { NextResponse } from "next/server";

export const dbConnect=async()=>{
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }
        await mongoose.connect(mongoUri);
        console.log("connected");
        
        // You can check connection state if needed:
        // if (mongoose.connection.readyState === 1) {
        //     // Connected
        // }
    } catch (error) {
        return NextResponse.json({
            msg:"Error connecting db"
        }, { status: 201 })
    }
}