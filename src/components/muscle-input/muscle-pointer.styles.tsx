import { COLORS } from '../../constant/colors';
import { CSSProperties } from 'react';

export const componentContainerStyle: CSSProperties = {
    height: '60px',
    width: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const outerPointerCircleStyle: CSSProperties = {
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderRadius: '50%',
    borderColor: COLORS.darkBlue,
    borderWidth: '4px',
    backgroundColor: 'inherit',
};

export const innerPointerCircleStyle: CSSProperties = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: COLORS.darkBlue,
};

export const pointerTextContainerStyle: CSSProperties = {
    width: '64px',
    height: '40px',
    padding: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: '8px',
    backgroundColor: COLORS.darkBlue,
    borderColor: COLORS.white,
};

export const pointerTextStyle: CSSProperties = {
    marginBottom: '0',
    display: 'inline-block',
    fontSize: '20px',
    color: COLORS.white,
};
