import { createAsyncThunk } from '@reduxjs/toolkit';

type FetchApproveEmailType = {
    approveEmail: string;
    email: string;
};

export const fetchApproveEmail = createAsyncThunk(
    'fetchApproveEmail',
    async (
        { approveEmail, email }: FetchApproveEmailType,
        { rejectWithValue }
    ) => {
        try {
            const isApproveSuccessResponse = await fetch(approveEmail, {
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
