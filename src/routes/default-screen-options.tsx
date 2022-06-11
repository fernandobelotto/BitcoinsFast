import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import Logo from '../components/svg-components/logo/logo';
import { Colors } from '../styles/colors';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerRight: () => <Logo />,
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.WHITE_90,
  },
};
