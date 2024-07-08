import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { RegisterFormFields } from '../../../constant/register-form-fields';

type FieldType = {
    name: string;
    email: string;
    password: string;
    password2: string;
    agreed: boolean;
};

type RegisterFormProps = {
    handleSuccessRegister: (
        name: string,
        email: string,
        password: string
    ) => void;
};

export const RegisterForm = ({ handleSuccessRegister }: RegisterFormProps) => {
    return (
        <Form
            style={{ maxWidth: 1024 }}
            onFinish={(values: FieldType) => {
                handleSuccessRegister(
                    values.name,
                    values.email,
                    values.password
                );
            }}
            autoComplete="off">
            <Form.Item<FieldType>
                name={RegisterFormFields.name.name}
                rules={[
                    {
                        required: RegisterFormFields.name.required,
                        message: RegisterFormFields.name.messageOnEmpty,
                    },
                ]}>
                <Input
                    size="large"
                    prefix={<UserOutlined style={{ marginRight: 12 }} />}
                    placeholder={RegisterFormFields.name.text}
                />
            </Form.Item>

            <Form.Item<FieldType>
                name={RegisterFormFields.email.name}
                rules={[
                    {
                        required: RegisterFormFields.email.required,
                        message: RegisterFormFields.email.messageOnEmpty,
                    },
                ]}>
                <Input
                    size="large"
                    prefix={<UserOutlined style={{ marginRight: 12 }} />}
                    placeholder={RegisterFormFields.email.text}
                />
            </Form.Item>

            <Form.Item<FieldType>
                name={RegisterFormFields.password.name}
                rules={[
                    {
                        required: RegisterFormFields.password.required,
                        message: RegisterFormFields.password.messageOnEmpty,
                    },
                ]}>
                <Input.Password
                    size="large"
                    prefix={<LockOutlined style={{ marginRight: 12 }} />}
                    placeholder={RegisterFormFields.password.text}
                />
            </Form.Item>

            <Form.Item<FieldType>
                name={RegisterFormFields.password2.name}
                rules={[
                    {
                        required: RegisterFormFields.password2.required,
                        message: RegisterFormFields.password2.messageOnEmpty,
                    },
                ]}>
                <Input.Password
                    size="large"
                    prefix={<LockOutlined style={{ marginRight: 12 }} />}
                    placeholder={RegisterFormFields.password2.text}
                />
            </Form.Item>

            <Form.Item>
                <Form.Item<FieldType>
                    name={RegisterFormFields.agreed.name}
                    rules={[
                        {
                            required: RegisterFormFields.agreed.required,
                            message: RegisterFormFields.agreed.messageOnEmpty,
                        },
                    ]}
                    valuePropName="checked">
                    <Checkbox>
                        Согласен с обработкой персональных данных
                    </Checkbox>
                </Form.Item>
            </Form.Item>

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
                    Зарегистрироваться
                </Button>
            </div>
        </Form>
    );
};
