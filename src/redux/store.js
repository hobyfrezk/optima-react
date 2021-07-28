import commentReducer from "./commentSlice";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import postReducer from "./postSlice";

//  redux store configuration.
const store = configureStore({
	reducer: {
		posts: postReducer,
		filter: filterReducer,
		comments: commentReducer,
	},
});

export default store;
