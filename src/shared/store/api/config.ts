import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { RootState } from '../types';

export const customBaseQuery = fetchBaseQuery({
	baseUrl: 'https://api.v2.react-learning.ru',
	prepareHeaders: (headers, { getState }) => {
		const accessToken = (getState() as RootState).user.accessToken;

		if (accessToken) {
			headers.set('authorization', accessToken);
		}
		return headers;
	},
});
