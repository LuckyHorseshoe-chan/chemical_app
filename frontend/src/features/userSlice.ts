import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
    value: object;
    logged: boolean;
    tab: string;
}
  
const initialState: UserState = {
    value: {},
    logged: false,
    tab: "table"
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogged: (state, action: PayloadAction<boolean>) => {
            state.logged = action.payload;
        },
        setUser: (state, action: PayloadAction<object>) => {
            state.value = action.payload;
        },
        setTab: (state, action: PayloadAction<string>) => {
            state.tab = action.payload;
        },
    },
});

export const { setLogged, setUser, setTab } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;