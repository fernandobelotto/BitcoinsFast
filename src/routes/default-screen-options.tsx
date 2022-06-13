import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import Logo from '../components/svg-components/logo/logo';
import { Colors } from '../styles/colors';
import { Fonts } from '../styles/fonts';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerRight: () => <Logo />,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: Colors.BLACK_100,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.WHITE_90,
  },
};
