"use client";

import * as React from "react";
import { AccountSwitcher } from "@/components/account-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
interface NavItem {
	title: string;
	url: string;
	description?: string;
	isActive?: boolean;
}

interface NavGroup {
	title: string;
	url: string;
	items: NavItem[];
}

interface Data {
	navMain: NavGroup[];
}

export default function AppSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();
	const router = useRouter();

	const initialData: Data = {
		navMain: [
			{
				title: "Trang chủ",
				url: "",
				items: [
					{
						title: "Giới thiệu hệ thống",
						url: "/home",
					},
					{
						title: "Hướng dẫn sử dụng",
						url: "/tutorial",
					},
				],
			},
			{
				title: "Tra cứu",
				url: "",
				items: [
					{
						title: "Tìm kiếm quy định",
						url: "/regulation-lookup",
						description: "Nhập nội dung muốn tìm và nhận kết quả phù hợp.",
					},
				],
			},
			{
				title: "Biểu mẫu",
				url: "#",
				items: [
					{
						title: "Danh sách biểu mẫu",
						url: "/forms",
						description: "Nhập nội dung muốn tìm và nhận kết quả phù hợp.",
					},
				],
			},
			{
				title: "Tài liệu và hỗ trợ",
				url: "#",
				items: [
					{
						title: "Câu hỏi thường gặp",
						url: "/faq",
					},
					{
						title: "Liên hệ hỗ trợ",
						url: "/contact",
					},
				],
			},
		],
	};
	const [data, setData] = React.useState<Data>(initialData);

	const handleSelect = (selectedItem: NavItem) => {
		setData((prevData) => ({
			...prevData,
			navMain: prevData.navMain.map((group) => ({
				...group,
				items: group.items.map((item) => ({
					...item,
					isActive: item.url === selectedItem.url,
				})),
			})),
		}));
		router.push(selectedItem.url);
	};

	React.useEffect(() => {
		setData((prevData) => ({
			...prevData,
			navMain: prevData.navMain.map((group) => ({
				...group,
				items: group.items.map((item) => ({
					...item,
					isActive: item.url === pathname,
				})),
			})),
		}));
	}, [pathname]);

	return (
		<Sidebar {...props}>
			<SidebarHeader className="flex items-center justify-center">
				<Link href="/">
					<Image
						src="/uit-logo.png"
						alt="UIT University Logo"
						width={50}
						height={50}
					/>
				</Link>
			</SidebarHeader>
			<SidebarContent>
				{data.navMain.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map((item) => (
									<SidebarMenuItem
										key={item.title}
										onClick={() => handleSelect(item)}
									>
										<SidebarMenuButton isActive={item.isActive}>
											{item.title}
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
