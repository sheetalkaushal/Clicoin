import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../style/color';
export const Style = StyleSheet.create({
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
  toptext: {
    paddingHorizontal: 23,
  },
  countpercentage: {
    color: color.Red,
    fontSize: 18,
    fontWeight: '400',
  },
  allbitcoin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 34,
    marginRight: 100,
    marginTop: 44,
    flex: 1,
    marginBottom: 20,
  },
  btnchange: {
    color: color.Dark_Green,
  },
});
