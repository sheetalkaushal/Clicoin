import { View, Text, Image, TouchableOpacity } from "react-native";
import React, {useRef } from "react";
import { Styles } from "./HeaderStyle";
import { Animated } from "react-native"
import ImagePath from "../constants/ImagePath";
import { useSelector } from "react-redux";
export default Header = ({myText,Myimg,notification,txtstyle,headerStyle}) => {
  const offset= useRef(new  Animated.Value(0)).current;
  return (
    <View style={{...Styles.header,...headerStyle}}>
      <TouchableOpacity style={Styles.Leftcontainer}>
        {Myimg ?(<Image style={Styles.profile} source={Myimg} />):null}
        <Text style={{...Styles.profilename,...txtstyle}}>{myText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.Rightcontainer}>
        <Image style={Styles.notification} source={notification}/>
      </TouchableOpacity>
    </View>

  );
};
const Styles=StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: moderateScale(23),
    borderBottomColor: 'black',
    backgroundColor: color.Dark_purple,
    paddingTop: moderateScale(15),
    height: 65,
    shadowColor: color.Black,
    // shadowOffset: {width: 1, height: 1},
    // shadowOpacity: 0.1,
    // elevation: 20,
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
})