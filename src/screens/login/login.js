/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert,
  TouchableOpacity,
  Dimensions,
  Animated,
  Keyboard,
  UIManager,
  TouchableHighlight,
} from 'react-native';
import SplashScreen from '../../components/splash-screen';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const shift = new Animated.Value(0)
const {State: TextInputState} = TextInput;

const submitForm = () => {
  Alert.alert('Form submitted successfully');
}

let handleKeyboardDidShow = event => {
  const {height: windowHeight} = Dimensions.get('window');
  const keyboardHeight = event.endCoordinates.height;
  const currentlyFocusedField = TextInputState.currentlyFocusedField();
  UIManager.measure(
    currentlyFocusedField,
    (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(shift, {
        toValue: gap - 100,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    },
  );
}

let handleKeyboardDidHide = () => {
  Animated.timing(shift, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  }).start();
};

const Login = () => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    const keyboardDidShowSub = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow,
    );
    const keyboardDidHideSub = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );
    // returned function will be called on component unmount
    return () => {
      keyboardDidShowSub.remove();
      keyboardDidHideSub.remove();
    }
  }, []);
  const [changePasswordFormData, setChangePasswordFormData] = useState('');
  const [isLoading, setIsLoading] = useState('true');
  const onChange = (name, value) => {
    //console.log(text)
    setChangePasswordFormData({...changePasswordFormData, [name]: value});
  };
  console.log(changePasswordFormData);
  return (
    <>
      {isLoading && <SplashScreen />}
      {!isLoading && 
        <Animated.View
          style={[styles.form, {transform: [{translateY: shift}]}]}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View>
              <Text style={styles.header}>Login</Text>
              <View style={styles.loginForm}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  name="email"
                  secureTextEntry={true}
                  onChangeText={text => onChange('email', text)}
                  defaultValue={changePasswordFormData.email}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  name="password"
                  secureTextEntry={true}
                  onChangeText={text => onChange('password', text)}
                  defaultValue={changePasswordFormData.password}
                />
                <TouchableOpacity>
                  <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Animated.View>}
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
  textInput: {
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 6,
    width: WIDTH * 0.9,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: Colors.black,
    color: Colors.white,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 15,
    width: WIDTH * 0.9,
    fontSize: 20,
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
  },
  header: {
    marginTop: 150,
    fontSize: 35,
    paddingLeft: 5,
    textAlign: 'center',
  },
  loginForm: {
    marginTop: HEIGHT * 0.06,
    marginBottom: HEIGHT * 0.06,
  },
});

export default Login;
