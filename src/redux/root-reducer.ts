import { combineReducers } from '@reduxjs/toolkit';
import { loginSliceReducer } from '../features/login-form/redux/slice';

export const getRootReducer = () =>
    combineReducers({
        featureLoginReducer: loginSliceReducer,
    });
