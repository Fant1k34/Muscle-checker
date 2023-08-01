import React, { FormEvent, useEffect, useRef } from 'react';
import { Typography } from 'antd';
import {
    inputContainerStyle,
    inputLabelStyle,
    inputStyle,
} from './muscle-input.styles';

type MuscleInputPropsType = {
    value: string;
    setValue: (event: string) => void;
    onSubmitSuccess: () => void;
    onSubmitCancel: () => void;
};

export const MuscleInput = ({
    value,
    setValue,
    onSubmitSuccess,
    onSubmitCancel,
}: MuscleInputPropsType) => {
    const wrapperRef = useRef(null);

    const submitWithCheck = () => {
        // Если это число, то сохраняем введенное число в инпут
        if (!isNaN(parseFloat(value))) {
            onSubmitSuccess();
            setValue(String(parseFloat(value)));
        } else {
            // Если пусто - сбрасываем, а если ошибка - просим заново
            if (value === '') {
                onSubmitCancel();
            }
        }
    };

    // Обрабатываем клик вне инпута = сохранение информации
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                submitWithCheck();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [submitWithCheck, setValue, wrapperRef]);

    // Обрабатываем нажатие Enter = сохранение информации
    const handleEnter = (event) => {
        if (event.code === 'Enter') {
            submitWithCheck();
        }
    };

    const handleType = (event: FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.length <= 5) {
            setValue(event.currentTarget.value);
        }
    };

    return (
        <div style={inputContainerStyle}>
            <input
                onChange={handleType}
                onKeyDown={handleEnter}
                autoFocus={true}
                ref={wrapperRef}
                value={value}
                style={inputStyle}
            />
            <Typography.Title level={3} style={inputLabelStyle}>
                см
            </Typography.Title>
        </div>
    );
};
