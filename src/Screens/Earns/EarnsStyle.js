import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';
export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  uppercontent: {
    backgroundColor: color.Green,
    flex: 0.7,
  },
  earn: {
    paddingTop: moderateVerticalScale(66),
    alignItems: 'center',
  },
  GetReturns: {
    alignItems: 'center',
    marginTop: moderateScale(8),
  },
  introduction: {
    fontSize: 14,
    color: color.Dark_Green,
    letterSpacing: 1,
  },
  Cryptos: {
    fontSize: 26,
    fontWeight: '600',
  },
  EarnsHodl: {
    fontSize: 18,
    marginTop: 7,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  alreadyInvested: {
    fontSize: 17,
    marginTop: moderateVerticalScale(34),
  },
  gradeplus: {
    fontWeight: '600',
  },
  invested: {
    alignItems: 'center',
    paddingTop: moderateVerticalScale(23),
  },
  Quickimg: {
    width: 345,
    borderRadius: 20,
  },
  earnings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(14),
    marginTop: moderateScale(23),
  },
  earningimg: {
    height: 100,
    width: 100,
    alignItems: 'center',
  },
  Earnings: {
    textAlign: 'center',
    paddingTop: moderateVerticalScale(15),
  },
});
