import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../theme/color';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.black,
  },
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: colors.black},
            headerTintColor: colors.white,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{
            headerStyle: {backgroundColor: colors.black},
            headerTintColor: colors.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
