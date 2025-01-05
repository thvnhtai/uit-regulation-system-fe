"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { regulations } from "@/data/regulation";
import { Search } from "lucide-react";
import { RegulationCard, Regulation } from "@/components/regulation-card";
import UserLayout from "@/layouts/user-layout";

export default function RegulationLookup() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState<Regulation[]>(regulations);

	const handleSearch = () => {
		const results = regulations.filter(
			(reg) =>
				reg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				reg.content.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setSearchResults(results);
	};

	return (
		<UserLayout>
			<div className={`min-h-screen bg-gray-50 dark:bg-gray-900`}>
				<header className="bg-white dark:bg-gray-800 border-b">
					<div className="container mx-auto p-4">
						<h1 className="text-2xl font-bold">Tra cứu văn bản</h1>
						<div className="mt-4 flex gap-2">
							<Input
								type="search"
								placeholder="Tìm kiếm văn bản..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="max-w-xl"
							/>
							<Button onClick={handleSearch}>
								<Search className="mr-2" />
								Tìm kiếm
							</Button>
						</div>
					</div>
				</header>

				<main className="container mx-auto p-4">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-semibold">
							Kết quả{" "}
							{searchResults.length > 0 ? `1-${searchResults.length}` : "0"}{" "}
							trong {regulations.length} văn bản
						</h2>
					</div>

					<div className="space-y-4">
						{searchResults.map((reg, index) => (
							<RegulationCard key={reg.id} regulation={reg} index={index} />
						))}
					</div>
				</main>
			</div>
		</UserLayout>
	);
}
