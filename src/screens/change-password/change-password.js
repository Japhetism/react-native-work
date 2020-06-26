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
  Modal,
  TouchableHighlight,
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

const ChangePassword = () => {
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
  const [changePasswordFormData, setChangePasswordFormData] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onChange = (name, value) => {
    //console.log(text)
    setChangePasswordFormData({...changePasswordFormData, [name]: value});
  };
  console.log(changePasswordFormData);
  return (
    <>
      <Animated.View style={[styles.form, {transform: [{translateY: shift}]}]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Password Changed Successfully!
              </Text>
              <TouchableOpacity
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <Text style={styles.modalButton}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text style={styles.header}>WorkDey -</Text>
            <Text style={styles.header}>Change Password</Text>
            <View style={styles.changePasswordForm}>
              <TextInput
                style={styles.textInput}
                placeholder="Old Password"
                name="oldPassword"
                secureTextEntry={true}
                onChangeText={text => onChange('oldPassword', text)}
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
              <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
                name="confirmPassword"
                secureTextEntry={true}
                onChangeText={text => onChange('confirmPassword', text)}
                defaultValue={changePasswordFormData.confirmPassword}
              />
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Text style={styles.button}>Change Password</Text>
              </TouchableOpacity>
            </View>
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
  modalButton: {
    backgroundColor: Colors.black,
    color: Colors.white,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 7,
    width: WIDTH * 0.4,
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
  changePasswordForm: {
    marginTop: HEIGHT * 0.2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 50,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ChangePassword;
