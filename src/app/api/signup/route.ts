import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/schema/UserSchema";
import { dbConnect } from "@/dbConnect/dbConnect";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect(); 

    const { email, password }: { email: string; password: string } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { msg: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { msg: "User created successfully" },
      { status: 200 } 
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { msg: "Error creating user"},
      { status: 500 }
    );
  }
};
