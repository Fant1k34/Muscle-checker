import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginFormFields } from '../../constant/login-form-fields';

import config from '../../../config/local.js';

type FieldType = {
    login: string;
    password: string;
};

export const LoginPage = () => {
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
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 1024 }}
            onFinish={onSuccessInput}
            onFinishFailed={() => alert('Wrong')}
            autoComplete="off">
            <Form.Item<FieldType>
                label={LoginFormFields.login.text}
                name={LoginFormFields.login.name}
                rules={[
                    {
                        required: LoginFormFields.login.required,
                        message: LoginFormFields.login.messageOnEmpty,
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label={LoginFormFields.password.text}
                name={LoginFormFields.password.name}
                rules={[
                    {
                        required: LoginFormFields.password.required,
                        message: LoginFormFields.password.messageOnEmpty,
                    },
                ]}>
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                name={LoginFormFields.agreed.name}
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
                rules={[
                    {
                        required: LoginFormFields.agreed.required,
                        message: LoginFormFields.agreed.messageOnEmpty,
                    },
                ]}>
                <Checkbox>
                    Согласен с&nbsp;условиями пользования и&nbsp;обработкой
                    персональных данных
                </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
};
