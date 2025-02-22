import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './src/navigation';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/store/store.ts';
import FlashMessage from 'react-native-flash-message';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
}

export default App;
