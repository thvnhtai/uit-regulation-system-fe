"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { authService } from "@/services/auth.service";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useAppDispatch } from "@/lib/store";
import { loginSuccess } from "@/lib/features/auth/authSlice";
import Cookies from "js-cookie";

const loginFormSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const { toast } = useToast();
	const dispatch = useAppDispatch();
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: LoginFormValues) => {
		setError(null);
		setLoading(true);

		try {
			const response = await authService.login({
				email: data.email,
				password: data.password,
			});
			toast({
				title: "Signed in",
				description: "You have successfully signed in",
			});
			dispatch(loginSuccess(response));

			Cookies.set("accessToken", response.tokens.access.token);
			Cookies.set("refreshToken", response.tokens.refresh.token);

			window.location.reload();
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle className="text-lg font-semibold text-black">
					Sign in to your account
				</CardTitle>
				<CardDescription>
					Enter your email below to sign in to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<div className="relative">
											<Input
												type="email"
												placeholder="m@example.com"
												{...field}
											/>
											<Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<div className="relative">
											<Input type="password" {...field} />
											<Lock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{error && <p className="text-red-500">{error}</p>}
						<Button className="w-full" type="submit" disabled={loading}>
							{loading ? (
								<div className="animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 h-4 w-4" />
							) : (
								"Sign In"
							)}
						</Button>
					</form>
				</Form>
				<div className="mt-4 w-full flex justify-center">
					<p className="text-sm text-gray-500">
						Don&apos;t have an account?
						<Link
							href="/register"
							className=" text-black font-semibold hover:underline ml-1"
						>
							Sign up
						</Link>
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
