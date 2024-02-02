import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './PersistStore';
import {persistStore }from 'redux-persist/';

// Create the store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export const persistor = persistStore(store);
