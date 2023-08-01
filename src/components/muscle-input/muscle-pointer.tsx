import React, { useState } from 'react';
import { MuscleMeasure } from '../../types';
import { MuscleInput } from './muscle-input';
import { Tooltip, Typography } from 'antd';
import {
    componentContainerStyle,
    innerPointerCircleStyle,
    outerPointerCircleStyle,
    pointerTextContainerStyle,
    pointerTextStyle,
} from './muscle-pointer.styles';

const { Paragraph } = Typography;

export type MusclePointerPropsType = {
    /**
     * Мышца, которую замеряют
     */
    muscle: MuscleMeasure;
    /**
     * Расположение: Правая, левая или общая ()
     */
    position: 'R' | 'L' | 'C';
    /**
     * Подсказка при наведении
     */
    muscleHint: string;
    /**
     * Функция, которая срабатывает после установки значения в инпут
     * @param size - результат ввода
     */
    onSet: (
        size: number,
        muscle: MuscleMeasure,
        position: 'R' | 'L' | 'C'
    ) => void;
    /**
     * Добавочные стили
     */
    otherStyle?: Record<string, string>;
};

export const MusclePointer = ({
    muscle,
    position,
    muscleHint,
    onSet,
    otherStyle,
}: MusclePointerPropsType) => {
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [value, setValue] = useState('');

    if (isInputOpen) {
        const onSubmitSuccess = () => {
            onSet(parseFloat(value), muscle, position);
            setIsInputOpen(false);
        };

        const onSubmitCancel = () => setIsInputOpen(false);

        return (
            <div style={{ ...componentContainerStyle, ...otherStyle }}>
                <MuscleInput
                    value={value}
                    setValue={setValue}
                    onSubmitSuccess={onSubmitSuccess}
                    onSubmitCancel={onSubmitCancel}
                />
            </div>
        );
    }

    const handleCircleClick = () => {
        setIsInputOpen(true);
        setValue('');
    };

    return (
        <Tooltip title={muscleHint}>
            <div style={{ ...componentContainerStyle, ...otherStyle }}>
                {value.length ? (
                    <button
                        onClick={handleCircleClick}
                        style={pointerTextContainerStyle}
                    >
                        <Paragraph style={pointerTextStyle}>{value}</Paragraph>
                    </button>
                ) : (
                    <button
                        onClick={handleCircleClick}
                        style={outerPointerCircleStyle}
                    >
                        <div style={innerPointerCircleStyle} />
                    </button>
                )}
            </div>
        </Tooltip>
    );
};
