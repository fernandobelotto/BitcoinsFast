import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import EmailAddress from '../screens/email-address/EmailAddress';
import VerifyEmail from '../screens/verify-email/VerifyEmail';
import NewAccount from '../screens/new-account/NewAccount';
import SelectLanguage from '../screens/select-language/SelectLanguage';
import EmailVerified from '../screens/email-verified/EmailVerified';
import { defaultScreenOptions } from './default-screen-options';
import RNBootSplash from 'react-native-bootsplash';

export type RootStackParamList = {
  SelectLanguage: undefined;
  EmailAddress: undefined;
  VerifyEmail: undefined;
  EmailVerified: undefined;
  NewAccount: undefined;
};

export type DefaultScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function AppRoutes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const { t } = useTranslation();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SelectLanguage"
          screenOptions={defaultScreenOptions}>
          <Stack.Screen
            options={{
              animation: 'slide_from_right',
              headerShown: false,
            }}
            name="SelectLanguage"
            component={SelectLanguage}
          />
          <Stack.Screen
            options={{
              title: t('enter_your_email_address'),
            }}
            name="EmailAddress"
            component={EmailAddress}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="EmailVerified"
            component={EmailVerified}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="VerifyEmail"
            component={VerifyEmail}
          />
          <Stack.Screen
            options={{
              title: t('your_new_account'),
            }}
            name="NewAccount"
            component={NewAccount}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
