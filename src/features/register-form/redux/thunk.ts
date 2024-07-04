import { createAsyncThunk } from '@reduxjs/toolkit';
import { setEmail } from './slice';

type FetchApproveEmailType = {
    approveEmailLink: string;
    email: string;
};

export const fetchApproveEmail = createAsyncThunk(
    'fetchApproveEmail',
    async (
        { approveEmailLink, email }: FetchApproveEmailType,
        { rejectWithValue, dispatch }
    ) => {
        dispatch(setEmail({ newEmail: email }));

        try {
            const isApproveSuccessResponse = await fetch(approveEmailLink, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ email }),
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
//
// type FetchResetPasswordType = {
//     loginToRestore: string;
// };
//
// export const fetchResetPassword = createAsyncThunk(
//     'fetchResetPassword',
//     async (
//         { loginToRestore }: FetchResetPasswordType,
//         { rejectWithValue, dispatch }
//     ) => {
//         try {
//             const resetPasswordResponce = await fetch('TODO');
//         } catch {}
//     }
// );
