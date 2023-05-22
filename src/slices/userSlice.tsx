import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../interfaces/userApi.interfaces'

export interface UserState {
  value: User[]
}

const initialState: UserState = {
  value: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUsers: (state, action: PayloadAction<User[]>) => {
        state.value = action.payload;
    },
    removeUsers: (state) => {
      state.value = [];
    },
  },
})

export const { loadUsers, removeUsers } = userSlice.actions

export default userSlice.reducer