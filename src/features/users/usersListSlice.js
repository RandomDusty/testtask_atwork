import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
	'games/getRelatedGames',
	async (_, thunkAPI) => {
		try {
			const result = await axios(
				'https://jsonplaceholder.typicode.com/users?_limit=6'
			);
			return result.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue(err);
		}
	}
);

const usersListSlice = createSlice({
	name: 'usersList',
	initialState: {
		activeUsers: [],
		archiveUsers: [],
		hiddenUsers: [],
		isLoading: false,
	},
	reducers: {
		addUserToArchive: (state, { payload }) => {
			state.activeUsers = state.activeUsers.filter(
				user => user.id !== payload.id
			);
			state.archiveUsers.push(payload);
		},

		addUserToActive: (state, { payload }) => {
			state.archiveUsers = state.archiveUsers.filter(
				user => user.id !== payload.id
			);
			state.activeUsers.push(payload);
		},

		hideUser: (state, { payload }) => {
			state.activeUsers = state.activeUsers.filter(
				user => user.id !== payload.id
			);
			state.hiddenUsers.push(payload);
		},
	},
	extraReducers: builder => {
		builder.addCase(getUsers.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getUsers.fulfilled, (state, { payload }) => {
			state.activeUsers = payload;
			state.isLoading = false;
		});
		builder.addCase(getUsers.rejected, state => {
			state.isLoading = false;
			console.log('Get users throw error');
		});
	},
});

export const { addUserToArchive, addUserToActive, hideUser } =
	usersListSlice.actions;

export default usersListSlice.reducer;
