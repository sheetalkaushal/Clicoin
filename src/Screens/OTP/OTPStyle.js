import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';
export const Styles = StyleSheet.create({
  main: {
    backgroundColor: color.White,
    paddingHorizontal: moderateScale(23),
    flex: 1,
  },
  arrow: {
    marginTop: moderateScale(38),
  },
  sms: {
    marginTop: moderateVerticalScale(23),
  },
  otpsms: {
    fontSize: 23,
    color: color.Black,
  },
  allotp: {
    flexDirection: 'row',
    gap: 16,
    marginTop: moderateScale(32),
  },
  otp1: {
    flex: 0.2,
  },
  receive: {
    color: color.DARK_GREY,
  },
  wait: {
    marginTop: moderateScale(23),
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  paste: {
    color: color.Dark_purple,
    borderRadius: 9,
    borderWidth: 1,
    fontSize: 14,
    borderColor: color.DARK_GREY,
    height: moderateScale(30),
    width: moderateScale(67),
    textAlign: 'center',
    alignSelf: 'center',
  },
});
