import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/color';

export default StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.white,
  },
  threeDots: {
    marginLeft: 'auto',
    color: colors.white,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.white,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
});
