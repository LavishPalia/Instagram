import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../navigation/types';
import Button from '../../components/Button';

import user from '../../assets/data/user.json';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, Follower, following numbers */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>100</Text>
          <Text style={{color: colors.white}}>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>232</Text>
          <Text style={{color: colors.white}}>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>330</Text>
          <Text style={{color: colors.white}}>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={{color: colors.white, fontWeight: '500'}}>{user.bio}</Text>

      {/* Buttons */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button
          text="Share Profile"
          onPress={() => console.warn('On Share Profile')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 20,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    color: colors.white,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
  },
  name: {
    fontWeight: fonts.weight.semi,
    color: colors.white,
  },
});

export default ProfileHeader;
