import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export  const Style= StyleSheet.create({
  container: {
    backgroundColor: color.White,
    flex: 1,
  },
  bitlist: {
    flex: 0.6,
  },
  back: {
    marginTop: 70,
    marginLeft: 23,
  },
  largeCap: {
    marginTop: moderateScale(34),
    marginLeft: moderateScale(23),
    color: color.Black,
    fontSize: 27,
    fontWeight: '600',
  },
  marketToken: {
    color: color.DARK_GREY,
    fontSize: 18,
    fontWeight: '400',
  },
  tokens: {
    marginLeft: moderateScale(23),
    marginTop: 12,
    color: color.DARK_GREY,
  },
  graphimg:scrollA=>( {
    height: 230,
    width: 400,
    top:scrollA
  }),
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
});
