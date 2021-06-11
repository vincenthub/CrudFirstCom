import 'react-native-gesture-handler';

import React from 'react';
import  { NavigationContainer } from '@react-navigation/native'
import { HomeScreenStack } from './src/navigations/MainAppStack'

import { Provider } from 'react-redux'
import { store } from './src/state/store'

 const App = () => {
   return (
     <Provider store={store}>
        <NavigationContainer>
            <HomeScreenStack />
        </NavigationContainer>
     </Provider>
   );
 };

 export default App;
