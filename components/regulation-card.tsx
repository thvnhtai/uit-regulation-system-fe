import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HighlightedText } from "@/components/highlighted-text";
import { Eye, Repeat2 } from "lucide-react";

export interface Regulation {
	id: string;
	answer: string;
	source: string;
	issueDate: string;
	updateDate: string;
	sourcePath: string;
	updateFilesPath: string;
	highlightedTerms?: string[];
}

interface RegulationCardProps {
	regulation: Regulation;
	index: number;
}

export const RegulationCard: FC<RegulationCardProps> = ({
	regulation,
	index,
}) => {
	const handleViewFile = (url: string) => {
		window.open(url, "_blank");
	};
	return (
		<Card className="overflow-hidden">
			<CardContent className="p-6">
				<div className="flex gap-4">
					<div className="text-2xl font-bold text-gray-950 w-8">
						{index + 1}
					</div>
					<div className="flex-1">
						<div className="grid gap-2">
							<h3 className="text-md font-bold uppercase">
								<HighlightedText
									text={`${regulation.source}`}
									terms={regulation.highlightedTerms || []}
								/>
							</h3>

							<div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-sm">
								<div>
									<span className="font-semibold">Ban hành:</span>{" "}
									{regulation.issueDate}
								</div>

								<div>
									<span className="font-semibold">Cập nhật:</span>{" "}
									{regulation.updateDate}
								</div>
							</div>

							<div className="flex gap-4 text-sm ">
								{regulation.sourcePath && (
									<button
										className="flex items-center gap-1 text-blue-600"
										onClick={() => handleViewFile(regulation.sourcePath)}
									>
										<Eye className="w-4 h-4" />
										Xem bản gốc
									</button>
								)}
								{regulation.updateFilesPath &&
									regulation.updateFilesPath !== "Không có" && (
										<button
											className="flex items-center gap-1 text-orange-600"
											onClick={() => handleViewFile(regulation.updateFilesPath)}
										>
											<Repeat2 className="w-4 h-4" />
											Xem bản cập nhật
										</button>
									)}
							</div>

							<div className="text-sm mt-2">
								<pre className="whitespace-pre-wrap font-sans">
									<HighlightedText
										text={regulation.answer}
										terms={regulation.highlightedTerms || []}
									/>
								</pre>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
