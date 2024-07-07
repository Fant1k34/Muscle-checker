import React from 'react';
import { RegisterState } from './constants/register-state';
import { RegisterForm } from './components/register-form';
import { WaitingForApproveForm } from './components/waiting-for-approve-form';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    emailSelector,
    nameSelector,
    registerStateSelector,
} from './redux/selectors';
import { fetchApproveEmail } from './redux/thunk';
import { setRegisterState } from './redux/slice';
import config from '../../../config/local';

export const RegisterModal = () => {
    const dispatch = useDispatch();
    const registerState = useSelector(registerStateSelector);
    const email = useSelector(emailSelector);
    // const name = useSelector(nameSelector);

    const handleSuccessRegister = (name: string, email: string) => {
        let approveEmailLink =
            config.api.apiUrl +
            config.api.services.register.checkEmail.frontUrl;
        // @ts-ignore
        dispatch(fetchApproveEmail({ approveEmailLink, name, email }));
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

    if (registerState == RegisterState.ERROR) return <div>Error ;(</div>;

    // Статус либо RegisterState.SENDING_CODE, либо RegisterState.CHECKING_CODE, либо обрабатываем успешную регистрацию
    return <Spin size="large" />;
};
