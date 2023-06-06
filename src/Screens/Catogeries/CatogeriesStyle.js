import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';
export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  cap: {
    paddingHorizontal: moderateScale(23),
    flex: 1,
    backgroundColor: color.White,
  },
  categery: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(30),
    gap: 8,
  },
  largeCaps: {
    fontSize: 20,
    fontWeight: '600',
  },
  tokens: {
    color: color.grey,
    fontSize: 13,
    fontWeight: '400',
  },
  market: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  symbol: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: moderateScale(9),
  },
  uppertext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 14,
    fontWeight: '500',
    color: color.Black,
    marginLeft: 20,
  },
  countdown: {
    fontSize: 18,
    fontWeight: '500',
    color: color.Light_green,
  },
  uppertexts: {
    fontSize: 18,
    fontWeight: '500',
    color: color.Black,
  },
  lowertext: {
    fontSize: 13,
    fontWeight: '500',
    color: color.DARK_GREY,
  },

  bitcoins: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    alignItems: 'center',
    marginBottom: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: color.grey_light,
    paddingVertical: moderateVerticalScale(15),
  },
  counting: {
    marginLeft: 90,
  },
});
