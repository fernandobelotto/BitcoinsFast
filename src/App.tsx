import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import i18n from './i18n';
import AppRoutesWrapper from './Providers';
import AppRoutes from './routes/app-routes';
import { store } from './store';
import { theme } from './styles/theme';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
              <AppRoutesWrapper>
                <AppRoutes />
              </AppRoutesWrapper>
            </I18nextProvider>
          </ThemeProvider>
        </Provider>
      </GestureHandlerRootView>
    </>
  );
}
