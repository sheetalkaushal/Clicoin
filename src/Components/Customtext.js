import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import color from "../style/color";
export default ({ title, onPress, style}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{ ...Styles.create_account, ...style}}
      >
        <Text style={Styles.account}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  create_account: {
    backgroundColor: color.Dark_purple,
    borderRadius: 2,
    height: moderateVerticalScale(48),
    alignItems: "center",
    paddingVertical: moderateVerticalScale(14),
    borderRadius: 8,
  },
  account: {
    fontSize: moderateVerticalScale(14),
    fontWeight: "bold",
    textAlign: "center",
    color: color.White,
  },
});
