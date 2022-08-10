import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export type User = {
  name: {
    first: string;
  };
  picture: {
    thumbnail: string;
  };
};

export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
  nextPage: number;
};

const initialState: UserListState = {
  users: [],
  loading: false,
  error: true,
  nextPage: 1,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {}
});

export default userListSlice.reducer;