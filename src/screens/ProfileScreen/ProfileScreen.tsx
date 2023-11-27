import React, {useEffect} from 'react';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';

type ParamList = {
  Feed: undefined;
  UserProfile: {userName: string};
};

type ProfileRouteProp = RouteProp<ParamList, 'UserProfile'>;
type ProfileNavigationProp = NativeStackNavigationProp<ParamList>;

const ProfileScreen = () => {
  const route = useRoute<ProfileRouteProp>();
  const navigation = useNavigation<ProfileNavigationProp>();
  console.log(route.params);

  const username = route.params.userName;

  useEffect(() => {
    navigation.setOptions({title: username});
  });

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
