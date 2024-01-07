import { createAsyncThunk } from '@reduxjs/toolkit';

type FetchLoginDataType = {
    loginUrl: string;
    login: string;
    password: string;
};

export const fetchLoginData = createAsyncThunk(
    '',
    (
        { loginUrl, login, password }: FetchLoginDataType,
        { rejectWithValue }
    ) => {
        // TODO: Пофиксить код, в любом случае получается успех запроса вне зависимости от реального результата
        fetch(loginUrl, {
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                login: login,
                password: password,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    rejectWithValue(false);
                } else {
                    return response.json();
                }
            })
            .then((response) => {
                if (response.result) {
                    return response.result;
                }

                rejectWithValue(false);
            });
    }
);
