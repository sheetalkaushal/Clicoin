import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';
import color from '../style/color';
export const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: moderateScale(23),
    borderBottomColor: 'black',
    backgroundColor: color.White,
    paddingTop: moderateScale(50),
    height: 100,
    shadowColor: color.Black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    elevation: 20,
  },
  Leftcontainer: {
    flexDirection: 'row',
    gap: 12,
  },
  profilename: {
    paddingTop: 6,
  },
  menu: {
    height: moderateVerticalScale(27),
    width: moderateScale(27),
  },
  profile: {
    height: moderateVerticalScale(30),
    width: moderateScale(30),
    borderRadius: 50,
  },
  notification: {
    height: moderateVerticalScale(30),
    width: moderateScale(30),
  },
  iconsorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: moderateScale(9),
    backgroundColor: color.White,
    paddingTop: moderateScale(60),
    width: 400,
    height: 40,
    shadowColor: color.Black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
