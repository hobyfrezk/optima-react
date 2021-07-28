import { createSlice } from "@reduxjs/toolkit";

// state management for search function.
const filterSlice = createSlice({
	name: "filter",
	initialState: { filter: "" },
	reducers: {
		updateFilter: (state, action) => {
			state.filter = action.payload.filter;
		},
	},
});

export const { updateFilter } = filterSlice.actions
export default filterSlice.reducer