import { configureStore } from '@reduxjs/toolkit';
import { getRootReducer } from './root-reducer';

const store = configureStore({
    reducer: getRootReducer(),
});

export default store;
