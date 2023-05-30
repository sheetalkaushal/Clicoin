import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import React, {useState} from 'react';
import color from '../style/color';
export default ({
  placeholder,
  icon,
  keyboard,
  hide,
  onPress,
  SHOW,
  ...props
}) => {
  const [isTextInputFocused, setTextInputFocused] = useState(false);
  // const onclick = () => {
  //   if (isTextInputFocused == true) {
  //     setTextInputFocused(false);
  //   } else if (isTextInputFocused == false) setTextInputFocused(true);
  // };
  return (
    <View
      style={{
        ...Style.inputstyle,
        // borderColor:
        // isTextInputFocused == true ? color.Dark_purple : color.DARK_GREY,
      }}
      onFocus={() => setTextInputFocused(true)}>
      <TextInput
        style={Style.settext}
        placeholder={placeholder}
        placeholderTextColor={color.Normal_white}
        keyboardType={keyboard}
        secureTextEntry={hide}
        {...props}
        prop></TextInput>
      {SHOW ? (
        <TouchableOpacity onPress={onPress}>
          <Image style={Style.show} source={SHOW} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const Style = StyleSheet.create({
  inputstyle: {
    // padding: moderateScale(2),
    marginTop: moderateScale(28),
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.grey_light,
  },
  settext: {
    flex: 1,
    color: color.Black,
  },
  show: {
    marginRight: moderateScale(12),
  },
});
