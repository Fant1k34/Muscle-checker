import React, { useState } from 'react';
import { RegisterState } from './constants/register-state';
import { RegisterForm } from './components/register-form';
import { WaitingForApproveForm } from './components/waiting-for-approve-form';

export const RegisterModal = () => {
    const [registerState, setRegisterState] = useState(RegisterState.REGISTER);
    const [email, setEmail] = useState<string>(null);

    if (registerState == RegisterState.REGISTER)
        return (
            <RegisterForm
                notifyRegisterInput={() =>
                    setRegisterState(RegisterState.WAITING_FOR_APPROVE)
                }
                setEmail={setEmail}></RegisterForm>
        );

    if (registerState == RegisterState.WAITING_FOR_APPROVE && !!email)
        return (
            <WaitingForApproveForm
                email={email}
                returnBack={() => setRegisterState(RegisterState.REGISTER)}
            />
        );

    return <div>Loading</div>;
};
