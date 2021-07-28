import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddBoxIcon from "@material-ui/icons/AddBox";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ModalNewPost from "./ModalNewPost";
import SearchForm from "./SearchForm";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { updateFilter } from "../redux/filterSlice";

const useStyles = (props) =>
	makeStyles((theme) => ({
		navigation: {
			position: "relative",
			backgroundColor: "rgba(100, 100, 150, 1)",
			color: "white",
		},
		textBox: {
			display: "flex",
		},
		toolbar: {
			justifyContent: "space-between",
			padding: "10px 30px 10px 30px",
		},
		collapseButton: {
			display: "none",
			marginLeft: "1vw",
			marginTop: "7px",
			[theme.breakpoints.down("xs")]: {
				display: "block",
			},
		},
		listAllButton: {
			display: props.filterKeyword === "" ? "none" : "default",
		},
		appTitle: {
			cursor: "default",
			userSelect: "none",
			fontFamily: "Otomanopee One, sans-serif",
			fontSize: "30px",
			margin: "5px",
		},
		button: {
			border: "3px solid #eae7dc",
			width: "120px",
			marginLeft: "7vw",
			textAlign: "center",
			borderRadius: "25px",
			padding: "3px",
			fontFamily: "Otomanopee One, sans-serif",
			"&:hover": {
				backgroundColor: "#DAE3E5",
				color: "#2A4366",
			},
			[theme.breakpoints.down("xs")]: {
				display: "none",
			},
		},
	}));

function NavBar() {

	const [modalVisible, setModalVisible] = useState(false);

	const handleOpen = () => {
		setModalVisible(true);
	};

	const handleClose = () => {
		setModalVisible(false);
	};

	const filterKeyword = useSelector((state) => {
		return state.filter.filter;
	});

	const dispatch = useDispatch();
	const handleListAll = () => dispatch(updateFilter({ filter: "" }));
	
	const classes = useStyles({ filterKeyword })();

	return (
		<AppBar position="fixed" className={classes.navigation}>
			<Toolbar className={classes.toolbar}>
				<div className={classes.textBox}>
					<h1 className={classes.appTitle}>Home</h1>

					<div style={{ display: "flex" }}>
						<IconButton
							color="inherit"
							className={classes.collapseButton}
							onClick={handleOpen}
							aria-label="new post"
						>
							<AddBoxIcon />
						</IconButton>
						<IconButton
							color="inherit"
							className={`${classes.collapseButton} ${classes.listAllButton}`}
							onClick={handleListAll}
							aria-label="list all post"
						>
							<ListAltIcon />
						</IconButton>
					</div>

					<ListItem
						button
						className={classes.button}
						onClick={handleOpen}
						aria-label="new post"
					>
						<ListItemText primary={"New Post"} disableTypography />
					</ListItem>

					<ListItem
						button
						className={`${classes.listAllButton} ${classes.button}`}
						onClick={handleListAll}
						aria-label="list all post"
					>
						<ListItemText primary={"List All"} disableTypography />
					</ListItem>
				</div>

				<SearchForm />
			</Toolbar>
			<ModalNewPost open={modalVisible} handleClose={handleClose} />
		</AppBar>
	);
}

export default NavBar;
