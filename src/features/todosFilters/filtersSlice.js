import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
	fulfield: 'false',
	activeFilter: 'all'
});

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		filtersSwitching: (state, action) => {state.activeFilter = action.payload},
		filterFulfield: (state, action) => {state.fulfield = action.payload}
	}
});

const {actions, reducer} = filtersSlice;

export default reducer;

export const {
	filterFulfield,
	filtersSwitching
} = actions;