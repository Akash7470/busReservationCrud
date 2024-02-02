import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import BusState from '../slice/BusSlice';

export interface RootState {
  bus: ReturnType<typeof BusState>;
}

// Define a root reducer with combineReducers
const rootReducer = combineReducers({
  bus: BusState,
  // Add other reducers here if you have more slices
});

// Configure persist options
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;