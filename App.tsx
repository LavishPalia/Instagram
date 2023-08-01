import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/';
import CommentsScreen from './src/screens/CommentsScreen/';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/';
import PostUploadScreen from './src/screens/PostUploadScreen/';
import colors from './src/theme/color';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      <PostUploadScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default App;
