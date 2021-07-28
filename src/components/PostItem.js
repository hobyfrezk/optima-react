import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import CommentItem from "./CommentItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HighlightedText from "./HighlightText";
import ModalNewComment from "./ModalNewComment";
import { deleteComment } from "../redux/commentSlice";
import { deletePost } from "../redux/postSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		border: "0",
		borderRadius: "0.3rem",
		position: "relative",
		boxShadow: "0px 0px 3px 1px gray",

		"&:hover": {
			boxShadow: "0px 0px 5px 3px rgba(56, 124, 175)",
		},
	},
	header: {
		display: "flex",
		alignItems: "center",
		background:
			"linear-gradient(45deg, rgba(234,231,220,1) 30%, rgba(195, 230, 221,0.7) 98%)",
	},
	avatar: {
		backgroundColor: "rgba(160, 67,54, 0.6)",
		margin: "20px",
	},
	author: {
		fontSize: "16px",
		fontWeight: "bold",
		margin: "10px 0 5px 0",
	},
	email: {
		fontSize: "14px",
		margin: "5px 0 10px 0",
	},
	content: {
		position: "relative",
		margin: "20px auto 20px auto",
		width: "70%",
		backgroundColor: "rgba(197, 212, 227)",
		borderRadius: "0.8em",
		padding: "30px 30px 30px 30px",
		minHeight: "200px",
		fontSize: "18px",
		fontFamily: "Inter, sans-serif",
		[theme.breakpoints.down("sm")]: {
			minHeight: "300px",
			width: "75%",
			padding: "10px",
			fontSize: "14px",
		},
		[theme.breakpoints.down("xs")]: {
			minHeight: "35px",
			width: "85%",
		},

		"&::after": {
			content: `""`,
			display: "block",
			position: "absolute",
			outline: "none",
			left: "15px",
			top: "-28px",
			width: 0,
			height: 0,
			borderTop: "15px solid transparent",
			borderBottom: "1em solid rgba(197, 212, 227)",
			borderLeft: "15px solid transparent",
			borderRight: "15px solid transparent",
		},
	},
	buttonGroup: {
		position: "relative",
		marginTop: "10px",
		display: "flex",
		justifyContent: "flex-end",
		paddingRight: "5vw",
	},
	button: {
		border: "2px solid rgba(32, 30, 108, 0.7)",
		width: "80px",
		padding: "2px",
		margin: "10px 10px 10px 10px",
		borderRadius: "20px",
		"&:hover": {
			backgroundColor: "rgba(81, 120, 86, 0.8)",
			color: "rgba(255, 238, 214)",
		},
	},
	buttonDelete: {
		border: "2px solid rgba(32, 30, 108, 0.7)",
		width: "80px",
		padding: "2px",
		margin: "10px 10px 10px 10px",
		borderRadius: "20px",
		"&:hover": {
			backgroundColor: "rgba(130, 78, 92, 0.8)",
			color: "rgba(255, 238, 214)",
		},
	},
	commentsContainer: {
		backgroundColor: "rgba(0,0,0,0)",
	},
	commentsDetailGroup: {
		width: "100%",
	},
	headingText: {
		fontSize: "14px",
		fontWeight: "900",
		[theme.breakpoints.down("sm")]: {
			fontSize: "12px",
			margin: "0",
		},
	},
}));

const PostItem = ({ id, author, email, text, keyword }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [modalVisible, setModalVisible] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const handleOpen = () => {
		setModalVisible(true);
	};

	const handleClose = () => {
		setModalVisible(false);
	};

	const handleDeleteClick = () => {
		dispatch(deletePost({ id: id }));
		dispatch(deleteComment({ post_id: id }));
	};

	const handleCommentClick = () => {
		handleOpen();
	};

	const comments = useSelector((state) => {
		return state.comments.filter((comment) => comment.post_id === id);
	});

	const handleOnChange = () => {
		setExpanded((state) => !state);
	};

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<Avatar className={classes.avatar}>
					{author.charAt(0).toUpperCase()}
				</Avatar>
				<div>
					<p className={classes.author}>{author.toUpperCase()}</p>
					<p className={classes.email}>{email}</p>
				</div>
			</div>

			<div className={classes.content}>
				{keyword === "" ? (
					<p>{text}</p>
				) : (
					<HighlightedText text={text} highlight={keyword} />
				)}
			</div>
			<div className={classes.buttonGroup}>
				<Button onClick={handleCommentClick} className={classes.button}>
					Reply
				</Button>
				<Button onClick={handleDeleteClick} className={classes.buttonDelete}>
					Delete
				</Button>
			</div>
			<Accordion
				className={classes.commentsContainer}
				onChange={handleOnChange}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					disabled={comments.length === 0}
				>
					<p className={classes.headingText}>
						{expanded
							? `Hide ${comments.length} ${
									comments.length > 1 ? "Comments" : "Comment"
							  }.`
							: `View ${comments.length} ${
									comments.length > 1 ? "Comments" : "Comment"
							  }.`}
					</p>
				</AccordionSummary>
				<AccordionDetails>
					<div className={classes.commentsDetailGroup}>
						{comments.map((comment) => (
							<CommentItem
								key={`post-${id}-comment-${comment.id}`}
								comment={comment}
							/>
						))}
					</div>
				</AccordionDetails>
			</Accordion>
			<ModalNewComment
				post_id={id}
				open={modalVisible}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default PostItem;
