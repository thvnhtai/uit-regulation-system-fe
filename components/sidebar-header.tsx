"use client";

import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";

const breadcrumbData: { [key: string]: { title: string; href: string }[] } = {
	"/home": [
		{ title: "Trang chủ", href: "/home" },
		{ title: "Giới thiệu hệ thống", href: "/tutorial" },
	],
	"/regulation-lookup": [
		{ title: "Tra cứu", href: "#" },
		{ title: "Tìm kiếm quy định", href: "/regulation-lookup" },
	],
	"/forms": [
		{ title: "Biểu mẫu", href: "#" },
		{ title: "Danh sách biểu mẫu", href: "/forms" },
	],
};

const SidebarHeader = () => {
	const pathname = usePathname();

	const getBreadcrumbItems = (path: string) => {
		const items = breadcrumbData[path];

		if (!items) {
			const lastSegment = path.split("/").pop();
			return [{ title: lastSegment ? lastSegment : "Trang chủ", href: path }];
		}

		return items;
	};

	const breadcrumbItems = getBreadcrumbItems(pathname);

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<SidebarTrigger className="-ml-1 text-black" />
			<Separator className="mr-2 h-4" />
			<Breadcrumb>
				<BreadcrumbList>
					{breadcrumbItems.map((item, index) => (
						<React.Fragment key={item.title}>
							<BreadcrumbItem>
								{item.href ? (
									<BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
								) : (
									<BreadcrumbPage>{item.title}</BreadcrumbPage>
								)}
							</BreadcrumbItem>
							{index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</header>
	);
};

export default SidebarHeader;
