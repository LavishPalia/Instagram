import {Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';

interface IButton {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.border,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,

    flex: 1,
    alignItems: 'center',

    padding: 5,
    margin: 5,
  },
  text: {
    color: colors.white,
    fontWeight: fonts.weight.semi,
  },
});

export default Button;
