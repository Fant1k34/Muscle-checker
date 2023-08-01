import { MuscleMeasure } from '../types';

type MusclePoint = {
    name: MuscleMeasure;
    muscleHint: string;
    position: 'R' | 'L' | 'C';
    topCoordinate: number;
    leftCoordinate: number;
};

export const musclePoints: MusclePoint[] = [
    {
        name: MuscleMeasure.BICEPS,
        muscleHint: 'Левая рука',
        position: 'L',
        topCoordinate: 183,
        leftCoordinate: 33,
    },
    {
        name: MuscleMeasure.BICEPS,
        muscleHint: 'Правая рука',
        position: 'R',
        topCoordinate: 183,
        leftCoordinate: 215,
    },
    {
        name: MuscleMeasure.FOREARM,
        muscleHint: 'Левое предплечье',
        position: 'L',
        topCoordinate: 245,
        leftCoordinate: 5,
    },
    {
        name: MuscleMeasure.FOREARM,
        muscleHint: 'Правое предплечье',
        position: 'R',
        topCoordinate: 253,
        leftCoordinate: 240,
    },
    {
        name: MuscleMeasure.DELTAS,
        muscleHint: 'Дельты и грудь',
        position: 'C',
        topCoordinate: 125,
        leftCoordinate: 128,
    },
    {
        name: MuscleMeasure.HIP,
        muscleHint: 'Левое бедро',
        position: 'L',
        topCoordinate: 365,
        leftCoordinate: 76,
    },
    {
        name: MuscleMeasure.HIP,
        muscleHint: 'Правое бедро',
        position: 'R',
        topCoordinate: 365,
        leftCoordinate: 176,
    },
    {
        name: MuscleMeasure.IKRA,
        muscleHint: 'Левая икра',
        position: 'L',
        topCoordinate: 515,
        leftCoordinate: 65,
    },
    {
        name: MuscleMeasure.IKRA,
        muscleHint: 'Правая икра',
        position: 'R',
        topCoordinate: 515,
        leftCoordinate: 175,
    },
    {
        name: MuscleMeasure.CHEST,
        muscleHint: 'Грудь и спина',
        position: 'C',
        topCoordinate: 158,
        leftCoordinate: 545,
    },
    {
        name: MuscleMeasure.WAIST,
        muscleHint: 'Талия',
        position: 'C',
        topCoordinate: 225,
        leftCoordinate: 545,
    },
    {
        name: MuscleMeasure.CHEEKS,
        muscleHint: 'Ягодицы',
        position: 'C',
        topCoordinate: 308,
        leftCoordinate: 545,
    },
    {
        name: MuscleMeasure.NECK,
        muscleHint: 'Шея',
        position: 'C',
        topCoordinate: 75,
        leftCoordinate: 545,
    },
];
