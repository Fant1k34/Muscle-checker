import React from 'react';

import { musclePoints } from '../../constant/muscle-points';
import { MusclePointer } from '../../components/muscle-input/muscle-pointer';

import addMeasure from '../../static/images/add-measure/two-sides.jpg';

import { addMeasureContainerStyle } from './body-add-measure.styles';

export const BodyAddMeasure = () => {
    return (
        <div style={addMeasureContainerStyle}>
            <img src={addMeasure} alt="Выбор мышц" height={720} />
            {musclePoints.map(
                ({
                    name,
                    muscleHint,
                    position,
                    topCoordinate,
                    leftCoordinate,
                }) => (
                    <MusclePointer
                        muscle={name}
                        muscleHint={muscleHint}
                        position={position}
                        onSet={(value) => {
                            alert(value);
                        }}
                        otherStyle={{
                            position: 'absolute',
                            top: `${topCoordinate}px`,
                            left: `${leftCoordinate}px`,
                        }}
                    />
                )
            )}
        </div>
    );
};
