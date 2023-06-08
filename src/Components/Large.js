import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ImagePath from '../constants/ImagePath';
import { moderateScale } from 'react-native-size-matters';

const Large = () => {
  return (
    <View>
      <TouchableOpacity style={style.navbar}>
        <Image source={ImagePath.icBack} />
        <Text>Large Cap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Large;
const style = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    marginTop:moderateScale(50),
    marginHorizontal:moderateScale(23),
    height:45,
    // width:23
  },
});