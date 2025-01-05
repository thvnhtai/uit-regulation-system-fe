import Navbar from "@/components/navigation/navbar";
import React from "react";

export default function DefaultLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			{children}
		</main>
	);
}
