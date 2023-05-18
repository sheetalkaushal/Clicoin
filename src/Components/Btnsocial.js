import {
    View,
    Text,
    Button,
    TouchableOpacity,
    StyleSheet,
    Image,
  
    
  } from "react-native";
  import React from "react";
  import {
    moderateScale,
    moderateVerticalScale,
  } from "react-native-size-matters";
import color from "../style/color";

  export default ({ onPress,title, socialimg,textstyle,viewStyle}) => {
    return (
      <TouchableOpacity onPress={onPress} style={{...Styles.btnsocial,...viewStyle}}>
        <Image source={socialimg}></Image>
        <Text style={{ ...Styles.textsocial, ...textstyle}}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const Styles = StyleSheet.create({
    btnsocial: {
      backgroundColor:color.White,
      borderRadius: 8,
      height: moderateVerticalScale(48),
      alignItems: "center",
      paddingHorizontal: moderateVerticalScale(16),
      marginBottom: moderateScale(16),
      flexDirection: "row",
      borderWidth:1,
      
    },
    textsocial: {
      fontSize: moderateVerticalScale(14),
      fontWeight: "bold",
      letterSpacing: moderateScale(0.88),
      textAlign: "center",
      color:color.Black,
      flex: 1,
    
    
    },
    socialimg: {
      alignSelf: "center",
      marginLeft: moderateScale(16),
    },
  });
  