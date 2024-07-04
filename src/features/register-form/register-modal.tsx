import React from 'react';
import { RegisterState } from './constants/register-state';
import { RegisterForm } from './components/register-form';
import { WaitingForApproveForm } from './components/waiting-for-approve-form';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { emailSelector, registerStateSelector } from './redux/selectors';
import { fetchApproveEmail } from './redux/thunk';
import { setRegisterState } from './redux/slice';

export const RegisterModal = () => {
    const dispatch = useDispatch();
    const registerState = useSelector(registerStateSelector);
    const email = useSelector(emailSelector);

    const handleSuccessRegister = (email: string) => {
        let approveEmailLink = '127.169.0.101';
        // @ts-ignore
        dispatch(fetchApproveEmail({ approveEmailLink, email }));
    };

    if (registerState == RegisterState.REGISTER)
        return (
            <RegisterForm
                handleSuccessRegister={handleSuccessRegister}></RegisterForm>
        );

    if (registerState == RegisterState.WAITING_FOR_APPROVE)
        return (
            <WaitingForApproveForm
                email={email}
                returnBack={() =>
                    dispatch(
                        setRegisterState({
                            newRegisterState: RegisterState.REGISTER,
                        })
                    )
                }
            />
        );

    // Статус либо RegisterState.SENDING_CODE, либо RegisterState.CHECKING_CODE, либо обрабатываем успешную регистрацию
    return <Spin size="large" />;
};
