import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Details from './screens/home/Details';
import SelectLanguage from './screens/select-language/SelectLanguage';
import { Colors } from './styles/colors';

export type RootStackParamList = {
  SelectLanguage: undefined;
  Details: undefined;
};

export default function AppRoutes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SelectLanguage"
          defaultScreenOptions={{
            headerTintColor: Colors.YELLOW_100,
          }}>
          <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
