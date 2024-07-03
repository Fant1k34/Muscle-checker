import React from 'react';
import { Button, Form, Input } from 'antd';
import { RegisterFormFields } from '../../../constant/register-form-fields';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Text } = Typography;

type FieldType = {
    code: string;
};

export const WaitingForApproveForm = ({
    email,
    returnBack,
}: {
    email: string;
    returnBack: () => void;
}) => {
    return (
        <Form
            style={{
                maxWidth: 1024,
                justifyContent: 'stretch',
            }}
            onFinish={() => {
                alert('Всё гуд');
            }}
            autoComplete="off">
            <div style={{ marginBottom: 4 }}>
                <Text>
                    Для подтверждения адреса электронной почты вам необходимо
                    ввести код, отправленный по адресу электронной почты {email}
                </Text>
            </div>
            <Form.Item<FieldType>
                name="code"
                rules={[
                    {
                        required: RegisterFormFields.name.required,
                        message: RegisterFormFields.name.messageOnEmpty,
                    },
                ]}>
                <Input
                    size="large"
                    prefix={<UserOutlined style={{ marginRight: 12 }} />}
                    placeholder="Код подтверждения"
                />
            </Form.Item>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                    width: '100%',
                    margin: 'auto',
                }}>
                <Button
                    style={{ width: '100%' }}
                    type="primary"
                    htmlType="submit"
                    size="large">
                    Подтвердить
                </Button>
                <Button
                    style={{ width: '100%' }}
                    type="link"
                    onClick={returnBack}
                    size="large">
                    Вернуться
                </Button>
            </div>
        </Form>
    );
};
