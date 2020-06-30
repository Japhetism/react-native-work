/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
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
  ScrollView,
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

const Works = () => {
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
  const [searchFormData, setSearchFormData] = useState('');
  const onChange = (name, value) => {
    //console.log(text)
    setSearchFormData({...searchFormData, [name]: value});
  };
  console.log(searchFormData);
  return (
    <>
      <Animated.View style={[styles.form, {transform: [{translateY: shift}]}]}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text style={styles.header}>Works</Text>
            <View style={styles.searchSection}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search that work..."
                name="search"
                onChangeText={text => onChange('search', text)}
                defaultValue={searchFormData.search}
              />
              <FontAwesomeIcon
                style={styles.searchIcon}
                icon={faSearch}
                size={15}
              />
            </View>
            <ScrollView style={styles.scrollViewStyle}>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.workTitle}>Flutter Developer</Text>
                  <Text style={styles.workPay}>
                    <Text>Pay - </Text>
                    <Text style={styles.textBold}>$300 monthly</Text>
                  </Text>
                  <Text style={styles.workType}>
                    <Text>Fulltime - </Text>
                    <Text style={styles.textBold}>Remote</Text>
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerText}>Fulltime</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerText}>Internship</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerText}>Contract</Text>
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
    backgroundColor: Colors.white,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#CED5D2',
    backgroundColor: '#CED5D2',
    borderRadius: 40,
    height: 45,
  },
  searchIcon: {
    padding: 5,
    marginTop: 13,
    marginRight: 15,
  },
  searchInput: {
    marginBottom: 10,
    marginTop: 0,
    width: WIDTH * 0.8,
    height: 40,
    paddingLeft: 20,
  },
  header: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 25,
    paddingLeft: 5,
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.white,
    borderBottomWidth: 0,
    shadowColor: Colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    padding: 20,
  },
  cardContent: {
    paddingLeft: 30,
  },
  workTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default Works;
