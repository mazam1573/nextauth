import bcrypt from "bcryptjs";
import User from '@/models/User';
import conectDB from '@/database/db';
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    const {email, password} = await request.json();

    await conectDB();

    const existingUser = await User.findOne({email});

    if(existingUser) {
        return new NextResponse("Email already exist", {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({email, password: hashedPassword});
    try {
        await newUser.save();
        return new NextResponse("User is created!", {status: 200});
    } catch (error: any) {
        return new NextResponse(error, {status: 500})
    }
}