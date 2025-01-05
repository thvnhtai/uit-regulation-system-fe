import DefaultLayout from "@/layouts/default-layout";
import LoginForm from "@/components/login-form";
import React from "react";

export default function LoginPage() {
	return (
		<DefaultLayout>
			<div className="flex items-center justify-center min-h-[800px]">
				<LoginForm />
			</div>
		</DefaultLayout>
	);
}
