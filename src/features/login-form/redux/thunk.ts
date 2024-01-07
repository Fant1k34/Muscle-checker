import { createAsyncThunk } from '@reduxjs/toolkit';
import { Exceptions } from '../constants/login-state';

type FetchLoginDataType = {
    loginUrl: string;
    login: string;
    password: string;
};

export const fetchLoginData = createAsyncThunk(
    '',
    async (
        { loginUrl, login, password }: FetchLoginDataType,
        { rejectWithValue }
    ) => {
        try {
            const isLoginSuccessResponse = await fetch(loginUrl, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    login: login,
                    password: password,
                }),
            });
            const { result, comment } = await isLoginSuccessResponse.json();

            if (result) {
                return true;
            } else {
                return rejectWithValue(comment);
            }
        } catch {
            return rejectWithValue(Exceptions.serverShutdown);
        }
    }
);
