import { Button, Form, Input, Spin } from 'antd';
import { LoginFormFields } from '../../constant/login-form-fields';
import React from 'react';
import config from '../../../config/local';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { LoginState } from './constants/login-state';
import { loginExceptionSelector, loginStateSelector } from './redux/selectors';
import { fetchLoginData } from './redux/thunk';

type FieldType = {
    login: string;
    password: string;
};

type LoginFormPropsType = {
    switchToReseting: () => void;
};

export const LoginForm = ({ switchToReseting }: LoginFormPropsType) => {
    const dispatch = useDispatch();
    const loginState = useSelector(loginStateSelector);
    const loginException = useSelector(loginExceptionSelector);

    const onSuccessInput = (values: FieldType) => {
        const loginUrl = config.api.apiUrl + config.api.services.login.frontUrl;

        dispatch(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fetchLoginData({
                loginUrl,
                login: values.login,
                password: values.password,
            })
        );
    };

    if (loginState === LoginState.CHECKING) {
        return <Spin size="large" />;
    }

    if (loginState === LoginState.SUCCESS) {
        document.location = config.api.services.login.redirectToAfterLogin;
    }

    return (
        <Form
            style={{ maxWidth: 1024 }}
            onFinish={onSuccessInput}
            autoComplete="off">
            <Form.Item<FieldType>
                name={LoginFormFields.login.name}
                rules={[
                    {
                        required: LoginFormFields.login.required,
                        message: LoginFormFields.login.messageOnEmpty,
                    },
                ]}>
                <Input
                    size="large"
                    prefix={<UserOutlined style={{ marginRight: 12 }} />}
                    placeholder={LoginFormFields.login.text}
                />
            </Form.Item>

            <Form.Item<FieldType>
                name={LoginFormFields.password.name}
                rules={[
                    {
                        required: LoginFormFields.password.required,
                        message: LoginFormFields.password.messageOnEmpty,
                    },
                ]}>
                <Input.Password
                    size="large"
                    prefix={<LockOutlined style={{ marginRight: 12 }} />}
                    placeholder={LoginFormFields.password.text}
                />
            </Form.Item>
            {loginState === LoginState.ERROR && loginException}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    width: '100%',
                    margin: 'auto',
                }}>
                <Button
                    style={{ width: '100%' }}
                    type="primary"
                    htmlType="submit"
                    size="large">
                    Войти
                </Button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    width: '100%',
                    margin: 'auto',
                }}>
                <Button
                    style={{ width: '100%' }}
                    type="link"
                    onClick={switchToReseting}
                    size="large">
                    Сбросить пароль
                </Button>
            </div>
        </Form>
    );
};
