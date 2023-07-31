import {View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import React from 'react';
import {IPost} from '../../types/models';
import colors from '../../theme/color';

const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={{flex: 1, aspectRatio: 1, maxWidth: '33.33%', padding: 1}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', right: 5, top: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
