import { createSlice } from "@reduxjs/toolkit";
import { initialCommentState } from "../service/dummyData";

const commentSlice = createSlice({
	name: "comments",
	initialState: initialCommentState,
	reducers: {
		addComment: (state, action) => {
			// if the data submitted with empty attributes,
			// we simply set it to NotGiven
			const newComment = {
				// the id can be set with node-uuid, but a timestamp is enough for this demo
				id: Date.now(),
				post_id: action.payload.post_id || "NotGiven",
				author: action.payload.author || "NotGiven",
				email: action.payload.email || "NotGiven",
				text: action.payload.text || "NotGiven",
			};
			state.push(newComment);
		},
		deleteComment: (state, action) => {
			// Cascade deletion.
			return state.filter(
				(comment) => comment.post_id !== action.payload.post_id
			);
		},
	},
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
