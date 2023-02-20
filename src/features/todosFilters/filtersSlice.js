import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
	activeFilter: 'all'
});

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		filtersSwitching: (state, action) => {state.activeFilter = action.payload}
	}
});

const {actions, reducer} = filtersSlice;

export default reducer;

export const {
	filtersSwitching
} = actions;