import { Grid } from "@material-ui/core";
import PostItem from "./PostItem";
import React from "react";
import filterPosts from "../service/filterService";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: "40px 20px 20px 20px",
	},
	title: {
		margin: "20px 0 0px 6px",
		fontSize: "1.5rem",
		fontFamily: "Otomanopee One, sans-serif",
		color: "rgba(134, 167, 186, 0.9)",
		display: "inline",
	},
	search: {
		fontFamily: "Otomanopee One, sans-serif",
		fontWeight: "100",
		fontSize: "1.2rem",
		color: "rgba(134, 167, 186, 0.9)",
		display: "inline",
	},
	container: {
		marginTop: "30px",
		[theme.breakpoints.down("sm")]: {
			marginTop: "10px",
		},
	},
}));

const PostList = () => {
	const classes = useStyles();

	const posts = useSelector((state) => {
		// filter posts based on keyword stored in redux.store.filter.
		return filterPosts(state.posts, state.filter.filter);
	});

	const keyword = useSelector((state) => state.filter.filter);
	return (
		<div className={classes.root}>
			{keyword === "" ? (
				<h2 className={classes.title}>All Posts:</h2>
			) : (
				<div>
					<h2 className={classes.title}>Search </h2>
					<div className={classes.search}>
						{posts.length} {posts.length > 1 ? "posts" : "post"} founded.
					</div>
				</div>
			)}
			<Grid container spacing={3} className={classes.container}>
				{posts.map((post) => (
					<Grid item xs={12} sm={6} lg={4} key={post.id}>
						<PostItem
							key={post.id}
							id={post.id}
							author={post.author}
							email={post.email}
							text={post.text}
							keyword={keyword}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default PostList;
