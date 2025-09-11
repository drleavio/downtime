import { statusChecker } from "@/app/lib/status";
import { dbConnect } from "@/dbConnect/dbConnect";
import { NextRequest } from "next/server"

export const POST=async(req:NextRequest)=>{
    const {uri}=await req.json();
    try {
        await dbConnect();
        const response=await statusChecker(uri);
        
    } catch (error) {
        
    }
}