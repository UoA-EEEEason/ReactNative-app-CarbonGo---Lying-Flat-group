import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store, {persistedStore} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {MainNavigation} from './navigation';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {COLORS} from './constants/color/color';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.blue,
    surfaceVariant: COLORS.white,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <GestureHandlerRootView style={{flex: 1}}>
          <PaperProvider theme={theme}>
            <MainNavigation />
          </PaperProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
