import { Button, Form, Input, Typography } from 'antd';
import { LoginFormFields } from '../../../constant/login-form-fields';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

type ResetPasswordPropsType = {
    switchToLogin: () => void;
};

export const ResetPassword = ({ switchToLogin }: ResetPasswordPropsType) => {
    const resetPassword = () => {
        switchToLogin();
    };

    return (
        <Form style={{ maxWidth: 1024 }} autoComplete="off">
            <Typography>Укажите email для сброса пароля</Typography>
            <Form.Item>
                <Input
                    size="large"
                    prefix={<UserOutlined style={{ marginRight: 12 }} />}
                    placeholder={LoginFormFields.login.text}
                />
            </Form.Item>
            <Typography>
                На вышеуказанную почту придёт новый пароль от аккаунта. Старый
                пароль станет недействительным
            </Typography>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    width: '100%',
                    margin: 'auto',
                }}
            >
                <Button
                    style={{ width: '100%' }}
                    type="primary"
                    onClick={switchToLogin}
                    size="large"
                >
                    Сбросить пароль
                </Button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    width: '100%',
                    margin: 'auto',
                }}
            >
                <Button
                    style={{ width: '100%' }}
                    type="link"
                    onClick={resetPassword}
                    size="large"
                >
                    Вернуться
                </Button>
            </div>
        </Form>
    );
};
