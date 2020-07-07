import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/register/register';
import ChangePasswordScreen from '../screens/change-password/change-password';
import WorksScreen from '../screens/works/works';
import FulltimeWorksScreen from '../screens/works/fulltime-works';
import  Login from '../screens/login/login';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name="register" component={RegisterScreen} /> */}
          {/* <Stack.Screen name="change-password" component={ChangePasswordScreen} /> */}
          {/* <Stack.Screen name="works" component={WorksScreen} /> */}
          {/* <Stack.Screen name="fulltime-works" component={FulltimeWorksScreen} /> */}
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigator;
