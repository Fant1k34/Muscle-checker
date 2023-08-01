import { COLORS } from '../../constant/colors';
import { CSSProperties } from 'react';

export const inputContainerStyle: CSSProperties = {
    display: 'inline-flex',
    justifyContent: 'left',
    alignItems: 'end',
    borderRadius: '8px',
    backgroundColor: COLORS.blue,
};

export const inputStyle: CSSProperties = {
    width: '64px',
    height: '40px',
    display: 'block',
    padding: '4px',
    borderColor: COLORS.blue,
    borderRadius: '8px',
    fontSize: '20px',
};

export const inputLabelStyle: CSSProperties = {
    margin: '0px 12px 6px 8px',
    color: COLORS.white,
    fontSize: '20px',
};
