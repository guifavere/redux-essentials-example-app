import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Tianna Jenkins' },
  { id: 1, name: 'Kylie Mcneil' },
  { id: 2, name: 'Loretta Mcmahon' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
