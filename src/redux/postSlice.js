import { createSlice } from "@reduxjs/toolkit";
import { initialPostState } from "./dummyData";

const postSlice = createSlice({
	name: "post",
	initialState: initialPostState,

	reducers: {
		addPost: (state, action) => {
			// if the data submitted with empty attributes,
			// we simply set it to NotGiven
			const newPost = {
				id: Date.now(),
				author: action.payload.author || "NotGiven",
				email: action.payload.email || "NotGiven",
				text: action.payload.text || "NotGiven",
			};
			state.push(newPost);
		},
		deletePost: (state, action) => {
			// find post id in redux store based on action payload id
			// if payload.id == 1 -> index = 0
			return state.filter((post) => post.id !== action.payload.id);
		},
	},
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
