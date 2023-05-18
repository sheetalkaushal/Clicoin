import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';

export const Style = StyleSheet.create({
  Watch: {
    flex: 1,
    backgroundColor: color.White,
    alignItems: 'center',
  },
  glasimg: {
    marginTop: moderateScale(120),
    alignItems: 'center',
  },
  shortlist: {
    alignItems: 'center',
  },
  explore: {
    width: 350,
    marginTop: moderateScale(55),
  },
  favourite: {
    fontSize: 18,
    fontWeight: '500',
  },

  Tabicon: {
    fontSize: 14,
    textAlign: 'center',
  },
});
