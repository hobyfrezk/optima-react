export default function getHighlightedText({ text, highlight }) {
	// Split text on highlight term, include term itself
	const parts = text.split(new RegExp(`(${highlight})`, "i"));
	return (
		<p>
			{parts.map((part, index) =>
				part.toLowerCase() === highlight.toLowerCase() ? (
					<b style={{ color: "red" }} key={index}>
						{part}
					</b>
				) : (
					part
				)
			)}
		</p>
	);
}
