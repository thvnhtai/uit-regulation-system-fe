import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface TestimonialCardProps {
	quote: string;
	author: string;
}

export default function TestimonialCard({
	quote,
	author,
}: TestimonialCardProps) {
	return (
		<Card>
			<CardContent className="pt-6">
				<blockquote className="text-lg text-muted-foreground mb-4">
					{quote}
				</blockquote>
				<p className="font-semibold">- {author}</p>
			</CardContent>
		</Card>
	);
}
