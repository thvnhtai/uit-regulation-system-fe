"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { logout } from "@/lib/features/auth/authSlice";
import Cookies from "js-cookie";
export default function Navbar() {
	const { user } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
		Cookies.remove("accessToken");
		Cookies.remove("refreshToken");
		window.location.reload();
	};

	return (
		<header className="sticky top-0 z-10 bg-background border-b">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<Link href="/">
						<Image
							src="/uit-logo.png"
							alt="UIT University Logo"
							width={50}
							height={50}
						/>
					</Link>
				</div>
				<nav>
					<ul className="flex space-x-4">
						{user ? (
							<li>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="ghost"
											className="relative w-8 h-8 rounded-full"
										>
											<Avatar className="w-8 h-8">
												<AvatarImage
													src={""}
													alt={user.name || "User Avatar"}
												/>
												<AvatarFallback>
													{user.name
														? user.name.slice(0, 2).toUpperCase()
														: "U"}
												</AvatarFallback>
											</Avatar>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="w-56" align="end" forceMount>
										<DropdownMenuLabel className="font-normal">
											<div className="flex flex-col space-y-1">
												<p className="text-sm font-medium leading-none">
													{user.name}
												</p>
												<p className="text-xs leading-none text-muted-foreground">
													{user.email}
												</p>
											</div>
										</DropdownMenuLabel>
										<DropdownMenuSeparator />

										<DropdownMenuItem onClick={handleLogout}>
											Log out
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</li>
						) : (
							<>
								<li>
									<Link href={"/login"}>
										<Button variant="outline">Login</Button>
									</Link>
								</li>
								<li>
									<Link href={"/register"}>
										<Button>Register</Button>
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}
