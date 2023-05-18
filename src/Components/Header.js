import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "./HeaderStyle";
import ImagePath from "../constants/ImagePath";
import { useSelector } from "react-redux";
export default Header = ({myText,Myimg,notification,txtstyle,headerStyle}) => {
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
