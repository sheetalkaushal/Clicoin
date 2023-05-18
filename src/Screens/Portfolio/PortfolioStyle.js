import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../../style/color';
export const Style = StyleSheet.create({
  container: {
    backgroundColor: color.White,
    flex: 1,
    paddingTop: moderateVerticalScale(78),
  },
  invest: {
    paddingHorizontal: moderateScale(23),
  },
  investments: {
    color: color.DARK_GREY,
    fontSize: 18,
  },
  popularcoins: {
    fontSize: 26,
    fontWeight: '600',
  },
  Startinvesting: {
    marginTop: 5,
  },
  bits: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(23),
    alignItems: 'center',
    marginTop: moderateVerticalScale(30),
    gap: 8,
  },
  bitimg: {
    borderRadius: moderateScale(23),
    height: 40,
    width: 40,
  },
  bitcoin: {
    color: color.Black,
    fontSize: 19,
    fontWeight: '500',
  },
  cointxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(23),
  },
  btctext: {
    color: color.DARK_GREY,
    fontSize: 16,
    paddingLeft: 47,
  },
  btc: {
    flex: 1,
    paddingLeft: moderateScale(12),
  },
  Bitcoininvest: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(12),
    marginHorizontal: moderateScale(20),
    paddingTop: moderateScale(6),
    gap: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5dc',
    height: 50,
  },
  percentimg: {
    borderRadius: moderateScale(20),
  },
  investment: {
    fontSize: 12,
    fontWeight: '400',
  },
  Ethereum: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    borderTopColor: color.grey_light,
    borderTopWidth: 1,
    marginTop: moderateScale(12),
    gap: 9,
    paddingTop: moderateScale(12),
    alignItems: 'center',
  },
  Ripple: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    borderTopColor: color.grey_light,
    borderTopWidth: 1,
    marginTop: moderateScale(12),
    gap: 9,
    paddingTop: moderateScale(12),
    alignItems: 'center',
  },
  seeCoins: {
    paddingHorizontal: moderateScale(23),
    marginTop: moderateScale(23),
  },
});
