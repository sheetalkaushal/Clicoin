import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: color.White,
    paddingHorizontal: moderateScale(20),
    flex: 1,
  },
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color: color.Black,
    fontWeight: '500',
    marginTop: moderateScale(27),
  },
  arrow: {
    marginTop: moderateScale(38),
  },
  btnstyle:{
    marginBottom: moderateScale(20),
  },
  Services: {
    marginTop: moderateVerticalScale(16),
    marginBottom: moderateVerticalScale(25),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  terms: {
    color: color.DARK_GREY,
    fontSize: 12,
  },
  termservice: {
    color: color.DARK_GREY,
    fontSize: 12,
    borderBottomColor: color.DARK_GREY,
    borderBottomWidth: 1,
    marginBottom: moderateScale(3),
  },
  policy: {
    color: color.DARK_GREY,
    fontSize: 12,
    borderBottomColor: color.DARK_GREY,
    borderBottomWidth: 1,
    marginBottom: moderateScale(3),
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
});
