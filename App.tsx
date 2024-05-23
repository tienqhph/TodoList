import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {styles} from './src/styles/globalStyle';

const App = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent" 
        
       
      />
      <HomeScreen />
    </>
  );
};

export default App;
