const isIncludeKeyword = (post, filter) => {
	const keyword = filter.toLowerCase();
	return (
		post.author.toLowerCase().includes(keyword) ||
		post.email.toLowerCase().includes(keyword) ||
		post.text.toLowerCase().includes(keyword)
	);
};

const filterPosts = (posts, filter) => {
	if (filter === "") {
		return posts;
	}
	return posts.filter((post) => isIncludeKeyword(post, filter));
};

export default filterPosts;
