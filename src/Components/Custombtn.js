import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from '../style/color';
export default ({title, onPress,style}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{...Styles.btntouch, ...style}}>
        <Text style={Styles.btntext}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  btntouch: {
    backgroundColor: color.Purple,
    height: moderateVerticalScale(48),
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(14),
    borderRadius: 8,
  },
  btntext: {
    fontSize: moderateVerticalScale(16),
    fontWeight: '600',
    textAlign: 'center',
    color: color.White,
  },
});
