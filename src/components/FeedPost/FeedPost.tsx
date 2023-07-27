import React from 'react';
import {Image, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import colors from '../../theme/color';

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* Header     */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://picsum.photos/id/7/4728/3168',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>LavishPalia</Text>
        <Entypo name="dots-three-vertical" size={16} style={styles.threeDots} />
      </View>
      {/* Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.white}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.white}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.white}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.white}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by
          <Text style={styles.bold}> Chirag Kedia </Text> and{' '}
          <Text style={styles.bold}> 99 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Chirag Kedia</Text> Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Odit corporis eaque quasi quaerat
          maxime tempora ad optio? Enim repellat incidunt adipisci harum, fuga
          beatae blanditiis? Beatae repellendus ad enim hic?
        </Text>

        {/* Comments */}
        <Text>View all 101 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>Chirag Kedia</Text> Lorem, ipsum dolor sit
            amet consectetur adipisicing elit.
          </Text>
          <AntDesign
            name={'hearto'}
            size={14}
            style={styles.icon}
            color={colors.white}
          />
        </View>

        {/* Posted date */}
        <Text>22 November, 2022</Text>
      </View>
    </View>
  );
};

export default FeedPost;
