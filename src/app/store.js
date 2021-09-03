import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/fetchSlice';

export const store = configureStore({ reducer: rootReducer })
