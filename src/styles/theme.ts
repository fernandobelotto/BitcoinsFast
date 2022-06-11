import { DefaultTheme } from 'styled-components/native';
import { Colors } from './colors';

export const theme: DefaultTheme = {
  primary: Colors.YELLOW_100,
  black: Colors.BLACK_FULL,
  black_70: Colors.BLACK_70,
  black_100: Colors.BLACK_100,
  black_10: Colors.BLACK_10,
  black_20: Colors.BLACK_20,
  gray_100: Colors.GRAY_100,
  gray_70: Colors.GRAY_70,
  white_90: Colors.WHITE_90,
  white_100: Colors.WHITE_100,
  fontWeight: {
    bold: 700,
    semiBold: 600,
    regular: 400,
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
  shadow: '1px 2px 0px rgba(0, 0, 0, 0.08)',
  borderRadius: '5px',
};
