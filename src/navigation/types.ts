import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Comments: {postId: string};
  'Edit Profile': undefined;
};

export type BottomStackParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type HomeStackParamList = {
  Feed: undefined;
  UserProfile: {userId: string};
};

export type CommentsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Comments'
>;

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomStackParamList,
  'MyProfile'
>;

export type MyProfileRouteProp = RouteProp<BottomStackParamList, 'MyProfile'>;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Feed'
>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'UserProfile'
>;

export type UserProfileRouteProp = RouteProp<HomeStackParamList, 'UserProfile'>;

export type EditProfileNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Edit Profile'
>;
