import { createSlice } from '@reduxjs/toolkit';
import { LoginState } from '../constants/login-state';
import { fetchLoginData, fetchResetPassword } from './thunk';

type InitialState = {
    loginState: string;
    resetPasswordState: string;
    errorComment?: string;
};

const initialState: InitialState = {
    loginState: LoginState.FILLING_FORM,
    resetPasswordState: LoginState.FILLING_FORM,
};

const loginSlice = createSlice({
    name: 'login-slice',
    initialState,
    reducers: {
        resetLoginState: (state) => {
            state.loginState = LoginState.FILLING_FORM;
        },
        resetResetPasswordState: (state) => {
            state.resetPasswordState = LoginState.FILLING_FORM;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLoginData.pending, (state) => {
            state.loginState = LoginState.CHECKING;
        });
        builder.addCase(fetchLoginData.fulfilled, (state) => {
            state.loginState = LoginState.SUCCESS;
        });
        builder.addCase(fetchLoginData.rejected, (state, { payload }: any) => {
            state.loginState = LoginState.ERROR;
            state.errorComment = payload;
        });
        builder.addCase(fetchResetPassword.pending, (state) => {
            state.loginState = LoginState.CHECKING;
        });
        builder.addCase(fetchResetPassword.fulfilled, (state) => {
            state.loginState = LoginState.SUCCESS;
        });
        builder.addCase(
            fetchResetPassword.rejected,
            (state, { payload }: any) => {
                state.loginState = LoginState.ERROR;
                state.errorComment = payload;
            }
        );
    },
});

export const loginSliceReducer = loginSlice.reducer;
export const { resetLoginState, resetResetPasswordState } = loginSlice.actions;
