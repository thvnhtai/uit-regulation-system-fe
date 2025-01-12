import React from "react";

interface HighlightedTextProps {
	text: string;
	terms: string[];
}

export function HighlightedText({ text, terms }: HighlightedTextProps) {
	if (!terms.length) {
		return <>{text}</>;
	}

	const escapeRegExp = (str: string) => {
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	};

	const highlightPattern = new RegExp(
		`(${terms.map(escapeRegExp).join("|")})`,
		"gi"
	);

	const parts = text.split(highlightPattern);

	return (
		<>
			{parts.map((part, index) =>
				highlightPattern.test(part) ? (
					<mark key={index} className="bg-green-200">
						{part}
					</mark>
				) : (
					<span key={index}>{part}</span>
				)
			)}
		</>
	);
}
