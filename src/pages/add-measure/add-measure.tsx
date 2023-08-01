import React from 'react';

import { BodyAddMeasure } from '../../features/body-add-measure/body-add-measure';

import { addMeasurePage } from './add-measure.styles';

export const AddMeasure = () => {
    return (
        <div style={addMeasurePage}>
            <BodyAddMeasure />
        </div>
    );
};
