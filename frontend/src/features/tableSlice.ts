import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TableState {
    currentPage: number;
    pagStep: number;
}
  
const initialState: TableState = {
    currentPage: 1,
    pagStep: 10
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setPagStep: (state, action: PayloadAction<number>) => {
            state.pagStep = action.payload;
        }
    },
});

export const { setCurrentPage, setPagStep } = tableSlice.actions;

export const selectTable = (state: RootState) => state.table;

export default tableSlice.reducer;