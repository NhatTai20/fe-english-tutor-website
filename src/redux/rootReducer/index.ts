import { combineReducers } from '@reduxjs/toolkit';
import homeSlice from '../slice/appSlice/homeSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key:'root',
  storage,
  whitelist: ['cartSlice']
}
const rootReducer = combineReducers({
  homeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);