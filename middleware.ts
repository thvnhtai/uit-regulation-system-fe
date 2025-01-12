import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = [
	"/home",
	"/tutorial",
	"/regulation-lookup",
	"/forms",
	"/faq",
	"/contact",
];
const authPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const accessToken = request.cookies.get("accessToken")?.value;

	if (privatePaths.some((path) => pathname.startsWith(path)) && !accessToken) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
		return NextResponse.redirect(new URL("/home", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: [
		"/login",
		"/register",
		"/home",
		"/tutorial",
		"/regulation-lookup",
		"/forms",
		"/faq",
		"/contact",
	],
};
