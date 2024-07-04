import { combineReducers } from '@reduxjs/toolkit';
import { loginSliceReducer } from '../features/login-form/redux/slice';
import { registerReducer } from '../features/register-form/redux/slice';

export const getRootReducer = () =>
    combineReducers({
        featureLoginReducer: loginSliceReducer,
        featureRegisterReducer: registerReducer,
    });
