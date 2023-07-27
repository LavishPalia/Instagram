import {StyleSheet} from 'react-native';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    color: colors.white,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 5,
  },
});
