import React, { useState } from 'react';
import { RegisterState } from './constants/register-state';
import { RegisterForm } from './register-form';

export const RegisterModal = () => {
    const [registerState, setRegisterState] = useState(RegisterState.REGISTER);

    if (registerState == RegisterState.REGISTER)
        return (
            <RegisterForm
                notifyRegisterInput={() =>
                    setRegisterState(RegisterState.WAITING_FOR_APPROVE)
                }></RegisterForm>
        );

    return <div> Жду и жду</div>;
};
