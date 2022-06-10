import { DefaultTheme } from 'styled-components/native';
import { Colors } from './colors';

export const theme: DefaultTheme = {
  primary: Colors.YELLOW_100,
  black: Colors.BLACK_FULL,
  black_70: Colors.BLACK_70,
  fontWeight: {
    bold: 700,
    semiBold: 600,
  },
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '21px',
    xl: '24px',
    xxl: '30px',
    xxxl: '32px',
  },
  shadow: {
    primary: '0px 2px 2px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: '5px',
};
