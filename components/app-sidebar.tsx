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
	accounts: string[];
	navMain: NavGroup[];
}

const initialData: Data = {
	accounts: ["Nguyễn Thành Tài", "Huỳnh Gia Bảo", "Admin"],
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
				{
					title: "Tài liệu tham khảo",
					url: "/docs",
				},
			],
		},
		{
			title: "Thông tin cá nhân",
			url: "#",
			items: [
				{
					title: "Hồ sơ sinh viên",
					url: "/profile",
				},
				{
					title: "Đăng xuất",
					url: "/logout",
				},
			],
		},
	],
};

export default function AppSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();
	const router = useRouter();
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
			<SidebarHeader>
				<AccountSwitcher
					accounts={data.accounts}
					defaultAccount={data.accounts[0]}
				/>
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
