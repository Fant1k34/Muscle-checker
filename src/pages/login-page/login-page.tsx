import React from 'react';
import { Modal, Tabs } from 'antd';

import { LoginForm } from '../../features/login-form/login-form';

export const LoginPage = () => {
    // TODO: Реализовать поддержку сессий (сейчас есть пользователь залогинился, то через 10 минут у него протухнет пароль)
    return (
        <Modal open={true} closable={false} footer={null} width={384}>
            <Tabs
                defaultActiveKey="1"
                size="large"
                items={[
                    {
                        label: 'Войти',
                        key: 'Войти',
                        children: <LoginForm />,
                    },
                    {
                        label: 'Зарегистрироваться',
                        key: 'Зарегистрироваться',
                        // TODO: Сделать форму для регистрации
                        children: <LoginForm />,
                    },
                ]}
            />
        </Modal>
    );
};
