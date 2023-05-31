import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import color from '../style/color';
import ImagePath from '../constants/ImagePath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
const Header_Max_Height = 300;
const Header_Min_Height = 100;

export default function DynamicHeader({
  animHeaderValue,
  placeholder,
  keyboard,
  onPress,
}) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [color.Dark_purple, color.White],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });
  const searchColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [color.White, color.grey_light],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        Styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
          elevation: 10,
        },
      ]}>
      <View style={Styles.banner}>
        <View style={Styles.navbar}>
          <View style={Styles.profileheader}>
            <Image style={Styles.imgprofile} source={ImagePath.icProfile} />
          </View>
          <Animated.View
            style={{...Styles.sreaching, backgroundColor: searchColor}}>
            <Image style={Styles.sreachimg} source={ImagePath.icSreach} />
            <TextInput
              style={Styles.lookingsreach}
              placeholder={placeholder}
              placeholderTextColor="black"
              keyboardType={keyboard}></TextInput>
          </Animated.View>
        </View>
        <View style={Styles.notification}>
          <Image source={ImagePath.icnotification} />
        </View>
      </View>
    </Animated.View>
  );
}
const Styles = StyleSheet.create({
  banner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 23,
    alignContent: 'center',
    // borderBottomColor: 'black',
  },
  header: {
    padding: 23,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: 'row',
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'black',
    shadowColor: 'Black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    gap: 10,
  },
  imgprofile: {
    height: moderateVerticalScale(25),
    width: moderateScale(25),
    borderRadius: 50,
  },
  sreaching: {
    height: 35,
    width: 210,
    borderRadius: 20,
    flexDirection: 'row',
    paddingLeft: 9,
    alignItems: 'center',
  },
  lookingsreach: {
    color: 'black',
    fontSize: 14,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  notification: {
    height: moderateVerticalScale(30),
    width: moderateScale(30),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
  },
  sreachimg: {
    width: 20,
    height: 20,
  },
  profileheader: {
    marginTop: 4,
  },
});
