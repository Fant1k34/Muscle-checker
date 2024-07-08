import { createSlice } from '@reduxjs/toolkit';
import { RegisterState } from '../constants/register-state';
import { fetchApproveEmail, fetchRegister } from './thunk';

type InitialState = {
    registerState: string;
    email?: string;
    name?: string;
    password?: string;
};

const initialState: InitialState = {
    registerState: RegisterState.REGISTER,
    email: null,
    name: null,
    password: null,
};

const registerSlice = createSlice({
    name: 'register-slice',
    initialState,
    reducers: {
        setRegisterState: (state, { payload: { newRegisterState } }) => {
            state.registerState = newRegisterState;
        },
        resetRegisterState: (state) => {
            state.registerState = RegisterState.REGISTER;
        },
        setFormData: (state, { payload: { email, name, password } }) => {
            state.email = email;
            state.name = name;
            state.password = password;
        },
        resetFormData: (state) => {
            state.email = null;
            state.name = null;
            state.password = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApproveEmail.pending, (state) => {
            state.registerState = RegisterState.SENDING_CODE;
        });
        builder.addCase(fetchApproveEmail.fulfilled, (state) => {
            state.registerState = RegisterState.WAITING_FOR_APPROVE;
        });
        builder.addCase(fetchApproveEmail.rejected, (state) => {
            state.registerState = RegisterState.ERROR;
        });
        builder.addCase(fetchRegister.pending, (state) => {
            state.registerState = RegisterState.CHECKING_CODE;
        });
        builder.addCase(fetchRegister.fulfilled, (state) => {
            state.registerState = RegisterState.SUCCESS;
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.registerState = RegisterState.ERROR;
        });
    },
});

export const registerReducer = registerSlice.reducer;
export const {
    setRegisterState,
    resetRegisterState,
    setFormData,
    resetFormData,
} = registerSlice.actions;
