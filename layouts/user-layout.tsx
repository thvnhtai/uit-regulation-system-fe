import AppSidebar from "@/components/app-sidebar";
import SidebarHeader from "@/components/sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function UserLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="flex flex-col min-h-screen">
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<SidebarHeader />
					<div className="flex flex-1 flex-col gap-4">
						{children}
						<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
					</div>
				</SidebarInset>
			</SidebarProvider>
		</main>
	);
}
