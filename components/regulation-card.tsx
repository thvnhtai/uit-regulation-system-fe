"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HighlightedText } from "@/components/highlighted-text";
import { Download, FileText } from "lucide-react";

export interface Regulation {
	id: string;
	documentNumber: string;
	issuedDate: string;
	effectiveDate: string;
	status: string;
	lastUpdated: string;
	title: string;
	content: string;
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
									text={`${regulation.documentNumber} ${regulation.title}`}
									terms={regulation.highlightedTerms || []}
								/>
							</h3>

							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
								<div>
									<span className="font-semibold">Ban hành:</span>{" "}
									{regulation.issuedDate}
								</div>
								<div>
									<span className="font-semibold">Hiệu lực:</span>{" "}
									<span className="text-red-600">
										{regulation.effectiveDate}
									</span>
								</div>
								<div>
									<span className="font-semibold">Tình trạng:</span>{" "}
									<span className="text-red-600">{regulation.status}</span>
								</div>
								<div>
									<span className="font-semibold">Cập nhật:</span>{" "}
									{regulation.lastUpdated}
								</div>
							</div>

							<div className="flex gap-4 text-sm text-blue-600">
								<button className="flex items-center gap-1">
									<FileText className="w-4 h-4" />
									Văn bản gốc
								</button>
								<button className="flex items-center gap-1">
									<Download className="w-4 h-4" />
									Tải về
								</button>
							</div>

							<div className="text-sm mt-2">
								<HighlightedText
									text={regulation.content}
									terms={regulation.highlightedTerms || []}
								/>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
