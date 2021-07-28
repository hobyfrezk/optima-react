import React, { useState } from "react";

import Backdrop from "@material-ui/core/Backdrop";
import { Button } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";

const ModalBase = ({
	open,
	addHandler,
	handleClose,
	classes,
	type,
	post_id,
}) => {
	const [state, setState] = useState({ author: "", email: "", content: "" });

	const onChange = (event) => {
		setState((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addHandler({
				...state,
				post_id,
			})
		);
		handleClose();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 100,
				classes: {
					root: classes.backDrop,
				},
			}}
		>
			<Fade in={open}>
				<div className={classes.container}>
					<h3 className={classes.title}>Create New {type}</h3>
					<div className={classes.formsContainer}>
						<TextField
							id="name"
							required
							type="text"
							className={classes.input}
							label="name"
							name="author"
							onChange={onChange}
							aria-label="Input your name"
						/>
						<TextField
							required
							type="text"
							className={classes.input}
							id="email"
							label="email"
							name="email"
							onChange={onChange}
							aria-label="Input your email address"
						/>
						<TextField
							required
							id="text"
							label="What would you like to say?"
							multiline
							type="text"
							className={classes.longInput}
							minRows={7}
							name="text"
							onChange={onChange}
							variant="outlined"
							aria-label="Input your contents"
						/>
					</div>

					<Button
						className={classes.button}
						onClick={onSubmit}
						aria-label="submit your content"
					>
						Create {type}
					</Button>
					<Button
						className={classes.crossButton}
						onClick={handleClose}
						aria-label="close modal"
					>
						<HighlightOffIcon />
					</Button>
				</div>
			</Fade>
		</Modal>
	);
};

export default ModalBase;
