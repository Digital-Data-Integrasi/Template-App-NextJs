import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    let checkauth = false;
    const token = request.cookies.get('accessToken')

    if (token) {
        checkauth = true;
    }
    
    if (checkauth) {
        return NextResponse.next()
    } else {
        const loginPage = new URL('/auth/login', request.url);
        return NextResponse.redirect(loginPage)
    }
};

export const config = {
    matcher:['/','/framework/:path*']
}