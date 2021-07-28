import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		// border: "1px solid black",
		borderRadius: "15px",
		width: "100%",
		display: "flex",
		margin: "5px 0 5px 0",
		background:
			"linear-gradient(to right top, rgba(101, 33, 101, 0.1) 40%, rgba(215, 197, 227, 0.5) 80%)",
	},
	avatar: {
		margin: "10px 3px 5px 10px",
		backgroundColor: "rgba(160, 67,54, 0.6)",
	},
	metaInfo: {
		display: "grid",
		alignItems: "baseline",
		justifyContent: "flex-start",

	},
	author: {
		fontSize: "16px",
		fontWeight: "bold",
		margin: "8px 8px 0px 8px",
	},
	email: {
		margin: "0px 8px 15px 8px",
		fontSize: "14px",
	},
	text: {
		margin: "0px 5px 18px 5px",
		fontSize: "14px",
		fontFamily: "Inter, sans-serif",
		padding: "5px 15px 10px 3px"
	},
}));

const CommentItem = ({ comment }) => {
	const classes = useStyles();
	const { author, email, text } = comment;

	return (
		<div className={classes.container}>
			<Avatar className={classes.avatar}>
				{author.charAt(0).toUpperCase()}
			</Avatar>
			<div>
				<div className={classes.metaInfo}>
					<p className={classes.author}>{author.toUpperCase()}</p>
					<p className={classes.email}>{email}</p>
				</div>
				<p className={classes.text}>{text}</p>
			</div>
		</div>
	);
};

export default CommentItem;
