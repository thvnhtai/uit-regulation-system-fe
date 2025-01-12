"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Search } from "lucide-react";
import { RegulationCard, Regulation } from "@/components/regulation-card";
import UserLayout from "@/layouts/user-layout";
import axiosInstance from "@/lib/axiosInstance";

export default function RegulationLookup() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState<Regulation[]>([]);
	const [totalResults, setTotalResults] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [searchPerformed, setSearchPerformed] = useState(false);
	const handleSearch = async () => {
		if (searchTerm.trim() === "") return;

		setIsLoading(true);
		setSearchPerformed(true);
		try {
			const response = await axiosInstance.post("/regulations/ask", {
				question: searchTerm,
			});

			if (response.data && response.data.results) {
				const updatedResults = response.data.results.map((reg: Regulation) => ({
					...reg,
					highlightedTerms: searchTerm.split(" "),
				}));

				setSearchResults(updatedResults);
				setTotalResults(response.data.results.length);
			} else {
				setSearchResults([]);
				setTotalResults(0);
				console.error("Invalid response format from the API");
			}
		} catch (error) {
			console.error("Error searching for regulations:", error);
			setSearchResults([]);
			setTotalResults(0);
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleSearch();
		}
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
								onKeyDown={handleKeyDown}
								className="max-w-xl"
							/>
							<Button onClick={handleSearch} disabled={isLoading}>
								{isLoading && (
									<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
								)}
								{!isLoading && <Search className="mr-2 h-4 w-4" />}
								Tìm kiếm
							</Button>
						</div>
					</div>
				</header>

				<main className="container mx-auto p-4">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-semibold">
							Kết quả {totalResults} văn bản
						</h2>
					</div>
					<div className="space-y-4">
						{!searchPerformed && (
							<p className="text-gray-500">
								Vui lòng nhập nội dung vào ô tìm kiếm để tra cứu văn bản.
							</p>
						)}
						{searchResults.length > 0
							? searchResults.map((reg, index) => (
									<RegulationCard key={index} regulation={reg} index={index} />
							  ))
							: searchPerformed && (
									<p className="text-gray-500">
										Không tìm thấy kết quả phù hợp.
									</p>
							  )}
					</div>
				</main>
			</div>
		</UserLayout>
	);
}
