import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.log('posting', newComment);
    // send the entered text to server or database here
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        placeholder="Write your comment"
        value={newComment}
        onChangeText={setNewComment}
        style={styles.input}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    paddingRight: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
    color: colors.primary,
    zIndex: 2,
  },
});

export default Input;
