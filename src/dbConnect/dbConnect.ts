import mongoose from "mongoose"
import { NextResponse } from "next/server";

export const dbConnect=async()=>{
    try {
        await mongoose.connect("");
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