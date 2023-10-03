import {cookies} from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const data = await request.json();
    if (data) {
        if (data.email === "ddi@gmail.com" && data.password==='ddi123') {
            cookies().set('accessToken', "mytoken")
            return  NextResponse.json({succes:"Login Success"})
        }
    }
    return NextResponse.json(
        {error: "User & password not match"},
        {status: 400}
    )
}