// A naive fluralizer. Too naive to work with real life challenge, but it is enough in this demo.
export function pluralizer(count, word) {
	return count > 1 ? `${word}s` : word;
}
