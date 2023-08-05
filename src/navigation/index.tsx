import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {Image} from 'react-native';
import Logo from '../assets/images/logo.png';
import colors from '../theme/color';
import {IUser} from '../types/models';

export type RootStackParamList = {
  Feed: undefined;
  UserProfile: {userId: string};
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.black,
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{
          headerStyle: {backgroundColor: colors.black},
          headerTitleStyle: {color: colors.white},
          headerTintColor: colors.white,
        }}>
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="UserProfile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return <Image source={Logo} style={{width: 150, height: 50}} />;
};

export default Navigation;
