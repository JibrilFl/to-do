import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // по умолчанию для web используется localStorage
import todos from '../features/todosList/todosSlice';
import filters from '../features/todosFilters/filtersSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['todos']
};

const reducer = combineReducers({
	todos,
	filters
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		},
	}),
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);