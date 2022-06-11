import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import AppRoutes from './routes/app-routes';
import { store } from './store';
import { theme } from './styles/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <AppRoutes />
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
