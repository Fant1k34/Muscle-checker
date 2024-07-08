import { createAsyncThunk } from '@reduxjs/toolkit';

type FetchApproveEmailType = {
    approveEmailLink: string;
    name: string;
    email: string;
};

export const fetchApproveEmail = createAsyncThunk(
    'fetchApproveEmail',
    async (
        { approveEmailLink, name, email }: FetchApproveEmailType,
        { rejectWithValue, dispatch }
    ) => {
        try {
            const isApproveSuccessResponse = await fetch(approveEmailLink, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ name, email }),
            });
            const { result, comment } = await isApproveSuccessResponse.json();

            if (result) {
                return true;
            } else {
                return rejectWithValue(comment);
            }
        } catch {
            return rejectWithValue(
                'Что-то пошло не так. Повторите попытку позднее'
            );
        }
    }
);

type FetchRegisterType = {
    registerLink: string;
    name: string;
    email: string;
    password: string;
    code: string;
};

export const fetchRegister = createAsyncThunk(
    'fetchRegister',
    async (
        { registerLink, name, email, password, code }: FetchRegisterType,
        { rejectWithValue, dispatch }
    ) => {
        try {
            const registerResponse = await fetch(registerLink, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ name, email, password, code }),
            });
            const { result, comment } = await registerResponse.json();

            if (result) {
                return true;
            } else {
                return rejectWithValue(comment);
            }
        } catch {
            return rejectWithValue(
                'Что-то пошло не так. Повторите попытку позднее'
            );
        }
    }
);
