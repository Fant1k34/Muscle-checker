import { createSlice } from '@reduxjs/toolkit';
import { LoginState } from '../constants/login-state';
import { fetchLoginData } from './thunk';

type InitialState = {
    loginState: string;
};

const initialState: InitialState = {
    loginState: LoginState.FILLING_FORM,
};

const loginSlice = createSlice({
    name: 'login-slice',
    initialState,
    reducers: {
        resetLoginState: (state) => {
            state.loginState = LoginState.FILLING_FORM;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLoginData.pending, (state) => {
            state.loginState = LoginState.CHECKING;
        });
        builder.addCase(fetchLoginData.fulfilled, (state) => {
            state.loginState = LoginState.SUCCESS;
        });
        builder.addCase(fetchLoginData.rejected, (state) => {
            state.loginState = LoginState.ERROR;
        });
    },
});

export const loginSliceReducer = loginSlice.reducer;
export const { resetLoginState } = loginSlice.actions;
