import { configureStore } from '@reduxjs/toolkit';
import AppApi from '../api/ApiServise';
import { rootReducer } from './reducers/rootReducer';
import { authApi } from './api/authApi';
import { productsApi } from './api/productsApi';

export const store = configureStore({
	reducer: rootReducer,
	// devTools: process.env.NODE_ENV !== 'production',
	devTools: false,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: AppApi,
			},
		}).concat([authApi.middleware, productsApi.middleware]),
});
