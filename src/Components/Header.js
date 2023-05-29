import * as React from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import color from '../style/color';
import ImagePath from '../constants/ImagePath';


const Header_Max_Height = 300;
const Header_Min_Height = 70;

export default function DynamicHeader({animHeaderValue}) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [color.Dark_purple,color.White],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  return (

    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
          elevation: 1,
        
        },
      ]}>
      <Text style={styles.headerText}>{ImagePath.icProfile}</Text>
      <Text style={styles.headerText}>{ImagePath.icnotification}</Text>
    </Animated.View>

  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 10,
    elevation: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
