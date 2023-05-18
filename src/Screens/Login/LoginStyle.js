import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: color.White,
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color: color.Black,
    fontWeight: '500',
    marginTop: moderateScale(27),
  },
  arrowhelp: {
    flexDirection: 'row',
    marginTop: moderateScale(38),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  help: {
    color: color.Dark_purple,
    fontSize: 20,
  },
  Continues: {
    backgroundColor: color.Purple,
    fontSize: 23,
  },
  forgot: {
    color: color.Dark_purple,
    fontSize: 14,
    marginVertical: moderateVerticalScale(23),
    fontWeight: '500',
  },
  or: {
    height: moderateVerticalScale(32),
    color: color.Normal_white,
    fontSize: 16,
    marginVertical: moderateVerticalScale(23),
    padding: 4,
  },
  orborder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orline: {
    height: 1,
    width: 100,
    marginLeft: moderateScale(44),
    backgroundColor: color.grey_light,
  },
  orline1: {
    height: 1,
    width: 100,
    marginRight: moderateScale(44),
    backgroundColor: color.grey_light,
  },
  sign: {
    alignItems: 'center',
    marginTop: moderateScale(23),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  signout: {
    color: color.Dark_purple,
    fontSize: 18,
  },
});
