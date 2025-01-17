import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import databaseReducer from './features/databaseSlice';
import tableReducer from './features/tableSlice';
import userReducer from './features/userSlice';
import formReducer from './features/formSlice';

export const store = configureStore({
  reducer: {
    database: databaseReducer,
    table: tableReducer,
    user: userReducer,
    form: formReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;