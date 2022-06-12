import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import EmailAddress from '../screens/email-address/email-address';
import VerifyEmail from '../screens/verify-email/verify-email';
import NewAccount from '../screens/new-account/new-account';
import SelectLanguage from '../screens/select-language/select-language';
import EmailVerified from '../screens/email-verified/email-verified';
import { defaultScreenOptions } from './default-screen-options';
import Home from '../screens/home/home';
import { useAuthentication } from '../hooks/use-authentication';
import RNBootSplash from 'react-native-bootsplash';
import { useAppSelector } from '../store';

export type RootStackParamList = {
  SelectLanguage: undefined;
  EmailAddress: undefined;
  VerifyEmail: undefined;
  EmailVerified: undefined;
  NewAccount: undefined;
  Home: undefined;
};

export type DefaultScreenProps = NativeStackScreenProps<RootStackParamList>;

export default function AppRoutes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const { session_secret } = useAppSelector(state => state.session);

  const { isAuthenticated } = useAuthentication();

  const { t } = useTranslation();
  return (
    <>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Stack.Navigator
          initialRouteName={isAuthenticated ? 'Home' : 'SelectLanguage'}
          screenOptions={defaultScreenOptions}>
          {session_secret ? (
            <>
              <Stack.Screen
                options={{
                  title: t('home'),
                  headerLeft: () => <></>,
                }}
                name="Home"
                component={Home}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="EmailVerified"
                component={EmailVerified}
              />
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
