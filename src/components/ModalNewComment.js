import ModalBase from "./ModalBase";
import React from "react";
import { addComment } from "../redux/commentSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	backDrop: {
		// add blur filter on the backgound will cause performance issue and havn't been supported on firefox yet
		// https://caniuse.com/css-backdrop-filter
		backdropFilter: "blur(3px)",
	},
	container: {
		position: "relative",
		backgroundColor: "white",
		width: "40%",
		minWidth: "570px",
		background: "linear-gradient(45deg, #fff 30%, rgba(234,231,220,0.7) 70%)",
		minHeight: "350px",
		borderRadius: "40px",
		top: `50%`,
		left: `50%`,
		backdropFilter: "5rem",
		transform: `translate(-50%, -50%)`,
		boxShadow: "0px 0px 3px 1px gray",
		display: "grid",
		gridTemplateRows: "auto 1fr auto",
		outline: "none",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			width: "90vw",
			minWidth: "300px",
		},
	},
	crossButton: {
		position: "absolute",
		right: "15px",
		top: "15px",
	},
	title: {
		fontSize: "1.5rem",
		fontWeight: "100",
		margin: "40px auto 0px auto",
		fontFamily: "Otomanopee One, sans-serif",
	},
	formsContainer: {
		display: "grid",
		gridTemplateRows: "1fr 1fr 3fr",
		alignItems: "center",
	},
	input: {
		margin: "auto",
		width: "60%",
		[theme.breakpoints.down("xs")]: {
			width: "80%",
		},
	},
	longInput: {
		margin: " 20px auto 20px auto",
		width: "60%",
		[theme.breakpoints.down("xs")]: {
			width: "80%",
		},
	},
	button: {
		border: "2px solid rgba(32, 30, 108, 0.7)",
		borderRadius: "25px",
		width: "160px",
		margin: " 0 auto 20px auto",
		outline: 0,
		"&:hover": {
			backgroundColor: "rgba(71, 67, 80)",
			color: "rgba(255, 238, 214)",
		},
	},
}));

const ModalNewComment = ({ open, handleClose, post_id }) => {
	return (
		<ModalBase
			open={open}
			addHandler={addComment}
			handleClose={handleClose}
			classes={useStyles()}
			type="Comment"
			post_id={post_id}
		/>
	);
};

export default ModalNewComment;
