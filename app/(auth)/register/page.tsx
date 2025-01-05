import React from "react";
import RegisterForm from "@/components/register-form";
import DefaultLayout from "@/layouts/default-layout";

export default function RegisterPage() {
	return (
		<DefaultLayout>
			<div className="flex items-center justify-center min-h-[800px]">
				<RegisterForm />
			</div>
		</DefaultLayout>
	);
}
