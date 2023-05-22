import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import color from '../style/color';
import ImagePath from '../constants/ImagePath';
const TextField = ({
  value = '',
  onChangeText = () => {},
  Focus = () => {},
  Blur = () => {},
  placeholder = '',
  isFocused = false,
  onPress,
  maxLength,
  passwordInput = false,
  passcheck,
  inputtextstyle,
  autoFocus,
  toggleEye = ()=>{}

}) => {
  const labelStyle = {
    position: 'relative',
    left: !isFocused ? 0 : 15,
    top: !isFocused ? 0 : 8,
    color: !isFocused ? color.DARK_GREY : color.Dark_purple,
    paddingHorizontal: isFocused ? 6 : 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignSelf: 'flex-start',
    zIndex: 9999,
  };

  return (
    <View style={style.container}>
      <Text style={labelStyle}>{isFocused ? placeholder : ''}</Text>
      <TouchableOpacity style={style.textField}>
        <TextInput
          style={{
            ...style.inputtext,...inputtextstyle,
            borderColor: !isFocused ? color.DARK_GREY : color.Dark_purple,
          }}
          value={value}
          onChangeText={onChangeText}
          onFocus={Focus}
          onBlur={Blur}
          autoFocus={autoFocus}
          blurOnSubmit
          placeholder={isFocused ? '' : placeholder}
          secureTextEntry={passcheck}
          maxLength={maxLength}></TextInput>
        {passwordInput ? (
          <TouchableOpacity onPress={toggleEye} style={style.hidebtn}>
           <Image source={passcheck?ImagePath.icHide:ImagePath.icView} />
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  inputtext: {
    fontSize: 16,
    color: 'black',
    height: 50,
    marginBottom: moderateScale(10),
    paddingLeft: moderateScale(13),
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hidebtn: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});

export default TextField;
