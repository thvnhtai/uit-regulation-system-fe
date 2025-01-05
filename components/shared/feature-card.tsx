import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import React from "react";

export interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export default function FeatureCard({
	icon,
	title,
	description,
}: FeatureCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center space-x-4">
					{icon}
					<span>{title}</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
