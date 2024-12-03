"use client";

import * as React from "react";
import { Check, ChevronsUpDown, UserCircle } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AccountSwitcher({
	accounts,
	defaultAccount,
}: {
	accounts: string[];
	defaultAccount: string;
}) {
	const [selectedAccount, setSelectedAccount] = React.useState(defaultAccount);

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<UserCircle className="size-4" />
							</div>
							<div className="flex flex-col gap-1 leading-none">
								<span className="text-xs font-semibold uppercase">
									Chuyển tài khoản
								</span>
								<span>{selectedAccount}</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width]"
						align="start"
					>
						{accounts.map((account) => (
							<DropdownMenuItem
								key={account}
								onSelect={() => setSelectedAccount(account)}
							>
								{account}{" "}
								{account === selectedAccount && <Check className="ml-auto" />}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
