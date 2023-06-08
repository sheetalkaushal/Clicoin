import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
// import { Styles } from "./HeaderStyle";
import {Animated} from 'react-native';
import ImagePath from '../constants/ImagePath';
import {useSelector} from 'react-redux';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../style/color';
export default Header = ({
  myText,
  Myimg,
  notification,
  txtstyle,
  headerStyle,
  navbar,
  navbartxt,
  headercolor,
}) => {
  return (
    <View style={{...Styles.header, ...headerStyle, ...navbar}}>
      <TouchableOpacity style={Styles.Leftcontainer}>
        {Myimg ? <Image style={Styles.profile} source={Myimg} /> : null}
        <Text style={{...Styles.profilename, ...txtstyle, ...navbartxt}}>
          {myText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={Styles.notification} source={notification} />
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: moderateScale(23),
    borderBottomColor: 'black',
    backgroundColor: color.White,
    marginTop:0,
    paddingTop: moderateScale(56),
    height: 40,
    shadowColor: color.Black,
    // shadowOffset: {width: 1, height: 1},
    // shadowOpacity: 0.1,
    // elevation: 20,
  },
  headercolor: {
    color: color.Dark_purple,
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
});
