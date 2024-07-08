import React from 'react';
import { RegisterState } from './constants/register-state';
import { RegisterForm } from './components/register-form';
import { WaitingForApproveForm } from './components/waiting-for-approve-form';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    emailSelector,
    nameSelector,
    passwordSelector,
    registerStateSelector,
} from './redux/selectors';
import { fetchApproveEmail, fetchRegister } from './redux/thunk';
import { setFormData, setRegisterState } from './redux/slice';
import config from '../../../config/local';

export const RegisterModal = () => {
    const dispatch = useDispatch();
    const registerState = useSelector(registerStateSelector);
    const email = useSelector(emailSelector);
    const name = useSelector(nameSelector);
    const password = useSelector(passwordSelector);

    const handleFillingForm = (
        name: string,
        email: string,
        password: string
    ) => {
        dispatch(setFormData({ name, email, password }));

        let approveEmailLink =
            config.api.apiUrl +
            config.api.services.register.checkEmail.frontUrl;
        // @ts-ignore
        dispatch(fetchApproveEmail({ approveEmailLink, name, email }));
    };

    const handleSuccessCode = (code: string) => {
        let registerLink =
            config.api.apiUrl + config.api.services.register.register.frontUrl;

        dispatch(
            // @ts-ignore
            fetchRegister({ registerLink, name, email, password, code })
        );
    };

    if (registerState === RegisterState.REGISTER)
        return (
            <RegisterForm
                handleSuccessRegister={handleFillingForm}></RegisterForm>
        );

    if (registerState === RegisterState.WAITING_FOR_APPROVE)
        return (
            <WaitingForApproveForm
                email={email}
                handleSubmit={handleSuccessCode}
                returnBack={() =>
                    dispatch(
                        setRegisterState({
                            newRegisterState: RegisterState.REGISTER,
                        })
                    )
                }
            />
        );

    if (registerState === RegisterState.ERROR) return <div>Error ;(</div>;

    if (registerState === RegisterState.SUCCESS) return <div>Ура ура ура</div>;

    // Статус либо RegisterState.SENDING_CODE, либо RegisterState.CHECKING_CODE, либо обрабатываем успешную регистрацию
    return <Spin size="large" />;
};
