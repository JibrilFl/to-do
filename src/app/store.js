import { configureStore } from '@reduxjs/toolkit';
import todos from '../features/todosList/todosSlice';
import filters from '../features/todosFilters/filtersSlice';

export const store = configureStore({
  reducer: {
    todos,
	filters
  },
  devTools: process.env.NODE_ENV !== 'production'
});