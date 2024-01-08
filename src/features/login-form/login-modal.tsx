import React from 'react';

import { useState } from 'react';
import { ResetPassword } from './components/reset-password';
import { LoginForm } from './login-form';

export const LoginModal = () => {
    const [isLoginReseting, setIsLoginReseting] = useState(false);

    const switchToLogin = () => setIsLoginReseting(false);
    const switchToReseting = () => setIsLoginReseting(true);

    return isLoginReseting ? (
        <ResetPassword switchToLogin={switchToLogin} />
    ) : (
        <LoginForm switchToReseting={switchToReseting} />
    );
};
