import { createSlice } from '@reduxjs/toolkit';
import { RegisterState } from '../constants/register-state';
import { fetchApproveEmail } from './thunk';

type InitialState = {
    registerState: string;
    email: string | null;
    name: string | null;
};

const initialState: InitialState = {
    registerState: RegisterState.REGISTER,
    email: null,
    name: null,
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
        setEmail: (state, { payload: { newEmail } }) => {
            state.email = newEmail;
        },
        resetEmail: (state) => {
            state.email = null;
        },
        setName: (state, { payload: { newName } }) => {
            state.email = newName;
        },
        resetName: (state) => {
            state.email = null;
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
    },
});

export const registerReducer = registerSlice.reducer;
export const {
    setRegisterState,
    resetRegisterState,
    setEmail,
    resetEmail,
    setName,
    resetName,
} = registerSlice.actions;
