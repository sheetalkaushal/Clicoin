import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import strings from "../../constants/strings";
import Registerbtn from "../../Components/Registerbtn";
import { Styles } from "./OTPStyle";
import ImagePath from "../../constants/ImagePath";
export const OTP = ({ navigation }) => {
  return (
    <View style={Styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image style={Styles.arrow} source={ImagePath.icBack}></Image>
      </TouchableOpacity>
      <View style={Styles.sms}>
        <Text style={Styles.otpsms}>{strings.OTP}</Text>
      </View>
      <View style={Styles.allotp}>
        <View style={Styles.otp1}>
          <Registerbtn placeholder="" />
        </View>
        <View style={Styles.otp1}>
          <Registerbtn placeholder="" />
        </View>
        <View style={Styles.otp1}>
          <Registerbtn placeholder="" />
        </View>
        <View style={Styles.otp1}>
          <Registerbtn placeholder="" />
        </View>
      </View>
      <TouchableOpacity style={Styles.wait}>
        <Text style={Styles.receive}>{strings.WaitOTP}</Text>
        <Text
          onPress={() => {
            navigation.navigate("");
          }}
          style={Styles.paste}
        >
          {strings.Paste}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
