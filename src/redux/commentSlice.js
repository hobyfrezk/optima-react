import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		post_id: 1,
		author: "mia",
		email: "mia@gmail.com",
		text: "This is first comment for post 1.",
	},
	{
		id: 2,
		post_id: 1,
		author: "luigi",
		email: "luigi@gmail.com",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
	},
	{
		id: 3,
		post_id: 2,
		author: "hoby",
		email: "hobyfrezk@gmail.com",
		text: "This is first comment for post 2.",
	},
	{
		id: 4,
		post_id: 6,
		author: "hoby",
		email: "hobyfrezk@gmail.com",
		text: "Praesent libero. Sed cursus ante dapibus diam.",
	},
	{
		id: 5,
		post_id: 6,
		author: "mia",
		email: "mia@gmail.com",
		text: "Vivamus eu turpis est. Mauris a molestie dolor. Donec egestas varius consectetur. Aenean sit amet urna ac sapien facilisis fringilla. Quisque vehicula elementum diam, sodales tempor magna venenatis vitae. Nulla mollis sem magna, in faucibus ligula tincidunt at. Aliquam tempor eros porttitor quam aliquet ornare. Quisque orci diam, eleifend sit amet enim commodo, tincidunt laoreet orci.",
	},
];

const commentSlice = createSlice({
	name: "comments",
	initialState: initialState,
	reducers: {
		addComment: (state, action) => {
			const newComment = {
				id: Date.now(),
				post_id: action.payload.post_id || "Not Given",
				author: action.payload.author || "Not Given",
				email: action.payload.email || "Not Given",
				text: action.payload.text || "Not Given",
			};
			state.push(newComment);
		},
	},
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
