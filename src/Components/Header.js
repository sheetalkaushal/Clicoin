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
