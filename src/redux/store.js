import { loadState, saveState } from "./localStorage";

import commentReducer from "./commentSlice";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import postReducer from "./postSlice";

const persistedState = loadState();

//  redux store configuration.
const store = configureStore({
	reducer: {
		posts: postReducer,
		filter: filterReducer,
		comments: commentReducer,
	},
	preloadedState: persistedState,
});

store.subscribe(() => {
	const state = store.getState();
	saveState({
		posts: state.posts,
		comments: state.comments,
	});
});

export default store;
