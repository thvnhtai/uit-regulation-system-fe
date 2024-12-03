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
const data = {
	accounts: ["Nguyễn Thành Tài", "Huỳnh Gia Bảo", "Admin"],
	navMain: [
		{
			title: "Trang chủ",
			url: "#",
			items: [
				{
					title: "Giới thiệu hệ thống",
					url: "#",
					isActive: false,
				},
				{
					title: "Hướng dẫn sử dụng",
					url: "#",
					isActive: false,
				},
			],
		},
		{
			title: "Tra cứu",
			url: "#",
			items: [
				{
					title: "Tìm kiếm quy định",
					url: "/regulation-lookup",
					description: "Nhập nội dung muốn tìm và nhận kết quả phù hợp.",
					isActive: true,
				},
				{
					title: "Lịch sử tra cứu",
					url: "#history",
					description: "Xem lại các tra cứu đã thực hiện gần đây.",
					isActive: false,
				},
			],
		},
		{
			title: "Tài liệu và hỗ trợ",
			url: "#",
			items: [
				{
					title: "Câu hỏi thường gặp",
					url: "#",
					isActive: false,
				},
				{
					title: "Liên hệ hỗ trợ",
					url: "#",
					isActive: false,
				},
				{
					title: "Tài liệu tham khảo",
					url: "#",
					isActive: false,
				},
			],
		},
		{
			title: "Thông tin cá nhân",
			url: "#",
			items: [
				{
					title: "Hồ sơ sinh viên",
					url: "#",
					isActive: false,
				},
				{
					title: "Đăng xuất",
					url: "#",
					isActive: false,
				},
			],
		},
	],
};

export default function AppSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
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
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild isActive={item.isActive}>
											<a href={item.url}>{item.title}</a>
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
