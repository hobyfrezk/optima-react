import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Fade from "@material-ui/core/Fade";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { updateFilter } from "../redux/filterSlice";

const initOnFocusState = {
	/*  used to initialize components onFocus/onHover State for advanced optional rendering */
	icon: false,
	input: false,
	inputHover: false,
};

const useStyles = ({ fieldInvisable }) =>
	makeStyles((theme) => ({
		root: {
			display: "flex",
			width: "8vw",
			alignItems: "center",
			color: "white",
			marginTop: "5px",
			marginRight: fieldInvisable ? "0px" : "15vw",
			[theme.breakpoints.down("xs")]: {
				width: "15vw",
			},
		},
		button: {
			background: "transparent",
			color: "inherit",
			border: "0",
			padding: "0px",
		},
		icon: {
			fontSize: "35px",
			[theme.breakpoints.down("xs")]: {
				fontSize: "25px",
				paddingTop: "5px",
			},
		},
		textField: {
			display: fieldInvisable ? "none" : "flex",
			width: "15vw",
			border: "0px",
			outline: 0,
			backgroundColor: "rgba(0,0,0,0)",
			borderBottom: "3px solid #DAE3E5",
			borderRadius: 0,
			fontSize: "20px",
			color: "#DAE3E5",
			padding: "0px",
			WebkitBoxSizing: "border-box" /* Safari/Chrome, other WebKit */,
			MozBoxSizing: "border-box" /* Firefox, other Gecko */,
			boxSizing: "border-box" /* Opera/IE 8+ */,
			WebkitAppearance: "none",
			[theme.breakpoints.down("xs")]: {
				width: "20vw",
				fontSize: "15px",
			},
			"&:hover": {
				borderBottom: "3px solid white",
				cursor: "text",
			},
		},
	}));

const SearchForm = () => {
	const [fieldInvisable, setFieldInvisable] = useState(true);
	const [focusState, setFocusState] = useState(initOnFocusState);

	const setOnFocus = (type) => {
		setFocusState((prev) => ({
			...prev,
			[type]: true,
		}));
	};

	const setOnBlur = (type) => {
		setFocusState((prev) => ({
			...prev,
			[type]: false,
		}));
	};

	const keyword = useSelector((state) => state.filter.filter);

	useEffect(() => {
		// search bar auto-hidden logic. 
		// if onfocus state is same as init onfocus state and search keyword is empty
		// 1. we should only hide the search bar -> when search word is empty
		// 2. we should hide the search bar when magnifying glass & search input lose focus or not hover.
		if (
			JSON.stringify(focusState) === JSON.stringify(initOnFocusState) &&
			keyword === ""
		) {
			setFieldInvisable(true);
		}
	}, [focusState, keyword]);

	const classes = useStyles({ fieldInvisable })();

	const dispatch = useDispatch();

	const handleOnChange = (event) => {
		dispatch(updateFilter({ filter: event.target.value }));
	};

	const handleOnClick = () => {
		//  when hide search bar by using magnifying glass, also delete typed in keyword
		setFieldInvisable((state) => !state);
		dispatch(updateFilter({ filter: "" }));
	};

	return (
		<div className={classes.root}>
			<button
				id="post-search-button"
				label="search button"
				className={classes.button}
				onClick={handleOnClick}
				aria-label="search button"
				onFocus={(e) => {
					setOnFocus("icon");
				}}
				onBlur={(e) => {
					setOnBlur("icon");
				}}
			>
				<SearchIcon className={classes.icon} />
			</button>
			<Fade in={!fieldInvisable} timeout={800}>
				<input
					aria-label="search text input"
					id="post-search-text"
					label="search"
					className={classes.textField}
					onChange={handleOnChange}
					value={useSelector((state) => state.filter.filter)}
					placeholder="keyword"
					type="text"
					onFocus={(e) => {
						setOnFocus("input");
					}}
					onBlur={(e) => {
						setOnBlur("input");
					}}
					onMouseEnter={() => setOnFocus("inputHover")}
					onMouseLeave={() => setOnBlur("inputHover")}
				/>
			</Fade>
		</div>
	);
};

export default SearchForm;
