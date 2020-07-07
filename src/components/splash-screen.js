/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
};

const SplashScreen = () => {
  return (
    <>
      <View style={styles.form}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <FadeInView>
            <Text style={styles.text}>WorkDey</Text>
          </FadeInView>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    backgroundColor: '#A6F5D3',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 55,
    textAlign: 'center',
  },
});

export default SplashScreen;
