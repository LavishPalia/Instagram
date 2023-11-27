import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Comments: undefined;
};

export type BottomTabParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notification: undefined;
  ProfileStack: undefined;
};

export type HomeStackParamList = {
  Feed: undefined;
  UserProfile: {userName: string};
};

export type ProfileStackParamList = {
  MyProfile: undefined;
  'Edit Profile': undefined;
};

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Feed'
>;

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'MyProfile'
>;

export type UserProfileRouteProp = RouteProp<HomeStackParamList, 'UserProfile'>;

export type MyProfileRouteProp = RouteProp<BottomTabParamList, 'ProfileStack'>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'UserProfile'
>;
export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'ProfileStack'
>;
