/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
} from 'react-native';

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

const Register = () => {
  useEffect(() => {
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
  const [signupFormData, setSignupFormData] = useState('');
  const onChange = (name, value) => {
    //console.log(text)
    setSignupFormData({...signupFormData, [name]: value});
  };
  console.log(signupFormData);
  return (
    <>
      <Animated.View style={[styles.form, {transform: [{translateY: shift}]}]}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text style={styles.header}>WorkDey -</Text>
            <Text style={styles.header}>Sign Up</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              name="email"
              onChangeText={text => onChange('email', text)}
              defaultValue={signupFormData.email}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              name="password"
              secureTextEntry={true}
              onChangeText={text => onChange('password', text)}
              defaultValue={signupFormData.password}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              name="confirmPassword"
              secureTextEntry={true}
              onChangeText={text => onChange('confirmPassword', text)}
              defaultValue={signupFormData.confirmPassword}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Phone number"
              name="phoneNumber"
              onChangeText={text => onChange('phoneNumber', text)}
              defaultValue={signupFormData.phoneNumber}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Portfolio link"
              name="portfolioLink"
              onChangeText={text => onChange('portfolioLink', text)}
              defaultValue={signupFormData.portfolioLink}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Resume link"
              name="resumeLink"
              onChangeText={text => onChange('resumeLink', text)}
              defaultValue={signupFormData.resumeLink}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Area of specilaization"
              name="specialization"
              onChangeText={text => onChange('specialization', text)}
              defaultValue={signupFormData.specialization}
            />
            <TouchableOpacity onPress={() => submitForm}>
              <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.submitText}>
              Already have an account? Login
            </Text>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
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
    marginTop: 10,
    marginBottom: 5,
    fontSize: 25,
    paddingLeft: 5,
  },
  submitText: {
    textAlign: 'center',
  },
});

export default Register;
