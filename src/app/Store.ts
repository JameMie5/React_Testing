// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import personReducer from '../features/person/personSlice';

const rootReducer = combineReducers({
  person: personReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof rootReducer>; // ใช้ rootReducer แทน store.getState()
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
