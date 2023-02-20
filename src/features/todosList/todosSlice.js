import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

// const initialState = {
// 	heroes: [],
// 	heroesLoadingStatus: 'idle'
// }

const initialState = todosAdapter.getInitialState({});

// export const fetchHeroes = createAsyncThunk(
// 	'heroes/fetchHeroes',
// 	() => {
// 		const { request } = useHttp();
// 		return request("http://localhost:3001/heroes")
// 	}
// );

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		todosAdd: (state, action) => { todosAdapter.addOne(state, action.payload) },
		todosDeleted: (state, action) => { todosAdapter.removeOne(state, action.payload) },
		todosUpdate: todosAdapter.updateOne,
	}
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(fetchHeroes.pending, state => {
	// 			state.heroesLoadingStatus = 'loading';
	// 		})
	// 		.addCase(fetchHeroes.fulfilled, (state, action) => {
	// 			heroesAdapter.setAll(state, action.payload);
	// 			state.heroesLoadingStatus = 'idle';
	// 		})
	// 		.addCase(fetchHeroes.rejected, state => {
	// 			state.heroesLoadingStatus = 'error';
	// 		})
	// 		.addDefaultCase(() => { })
	// }
});

const { actions, reducer } = todosSlice;

export default reducer;

export const { selectAll } = todosAdapter.getSelectors(state => state.todos);

export const filteredTodosSelector = createSelector(
	[state => state.filters.activeFilter, selectAll],
	(filter, todos) => {
		if (filter === 'all') {
			return todos;
		} else {
			return todos.filter(todo => todo.color === filter);
		}
	}
)

export const {
	// heroesFetching,
	// heroesFetched,
	// heroesFetchingError,
	todosUpdate,
	todosAdd,
	todosDeleted
} = actions;