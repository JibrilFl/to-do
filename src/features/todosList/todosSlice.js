import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		todosAdd: (state, action) => { todosAdapter.addOne(state, action.payload) },
		todosDeleted: (state, action) => { todosAdapter.removeOne(state, action.payload) },
		todosUpdate: todosAdapter.updateOne
	}
});

const { actions, reducer } = todosSlice;

export default reducer;

export const { selectAll } = todosAdapter.getSelectors(state => state.todos);

export const filteredTodosSelector = createSelector(
	[state => state.filters, selectAll],
	(filter, todos) => {
		switch (filter.activeFilter) {
			case 'all':
				if (filter.fulfield !== 'none') {
					return todos.filter(todo => '' + todo.active === filter.fulfield);
				}
				return todos;
			default:
				if (filter.fulfield !== 'none') {
					return todos.filter(todo => todo.color === filter.activeFilter && '' + todo.active === filter.fulfield);
				}
				return todos.filter(todo => todo.color === filter.activeFilter);
		}
	}
)

export const {
	todosUpdate,
	todosAdd,
	todosDeleted
} = actions;