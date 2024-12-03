interface HighlightedTextProps {
	text: string;
	terms: string[];
}

export function HighlightedText({ text, terms }: HighlightedTextProps) {
	let highlightedText = text;

	terms.forEach((term) => {
		const regex = new RegExp(`(${term})`, "gi");
		highlightedText = highlightedText.replace(
			regex,
			'<mark class="bg-green-200">$1</mark>'
		);
	});

	return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
}
