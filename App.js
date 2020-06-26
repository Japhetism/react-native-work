/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './src/navigations/navigator';
import { StyleSheet, Text, View } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
