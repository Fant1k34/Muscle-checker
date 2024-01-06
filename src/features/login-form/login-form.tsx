import { Button, Form, Input } from 'antd';
import { LoginFormFields } from '../../constant/login-form-fields';
import React from 'react';
import config from '../../../config/local';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

type FieldType = {
    login: string;
    password: string;
};

export const LoginForm = () => {
    const onSuccessInput = (values: FieldType) => {
        const loginUrl = config.api.apiUrl + config.api.services.login.frontUrl;

        fetch(loginUrl, {
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                login: values.login,
                password: values.password,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error('No success');
                }

                return response.json();
            })
            .catch(() => {
                alert('Что-то пошло не так');
            })
            .then((response) => {
                if (response.result) {
                    document.location = '/';
                } else {
                    alert(response.comment);
                }
            });
    };

    return (
        <Form
            style={{ maxWidth: 1024 }}
            onFinish={onSuccessInput}
            onFinishFailed={() => alert('Wrong')}
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
                    prefix={<LockOutlined style={{ marginRight: 12 }} />}
                    placeholder={LoginFormFields.password.text}
                />
            </Form.Item>
            <Form.Item
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 'auto',
                }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
                <Button type="link" htmlType="submit">
                    Не помню пароль
                </Button>
            </Form.Item>
        </Form>
    );
};
