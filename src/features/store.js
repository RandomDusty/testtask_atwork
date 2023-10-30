import { configureStore } from '@reduxjs/toolkit';
import usersListSlice from './users/usersListSlice';

export const store = configureStore({
	reducer: {
		usersList: usersListSlice,
	},
	devTools: true,
});
