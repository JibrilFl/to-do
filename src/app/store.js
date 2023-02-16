import { configureStore } from '@reduxjs/toolkit';
import todos from '../features/todosList/todosSlice';

export const store = configureStore({
  reducer: {
    todos
  },
  devTools: process.env.NODE_ENV !== 'production'
});