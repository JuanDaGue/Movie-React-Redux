import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types';


const initialState: UserState = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: '/avatar.webp',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<Partial<UserState>>) => {
        return { ...state, ...action.payload };
        },
    },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;