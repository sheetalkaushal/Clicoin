import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './RegisterStyle';
import Registerbtn from '../../Components/Registerbtn';
import Custombtn from '../../Components/Custombtn';
import ImagePath from '../../constants/ImagePath';
import Btnsocial from '../../Components/Btnsocial';
import strings from '../../constants/strings';
import {namedata} from '../../redux/actions/action';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import TextField from '../../Components/TextField';
import {moderateScale} from 'react-native-size-matters';
export const Register = ({navigation}) => {
  const [FullName, SetFullName] = useState('');
  const [Email, SetEmail] = useState('');
  const [pass, SetPass] = useState('');
  const [passcheck, Setpasscheck] = useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedFullName, setIsFocusedFullName] = useState(false);
  function gotosetpass() {
    if (!FullName.trim()) {
      alert('Enter your first name');
    } else if (!Email.trim()) {
      alert('Enter your Email');
    } else if (!pass.trim()) {
      alert('enter password');
    } else {
      navigation.navigate('OTP');
    }
  }
  const handleFocus = stateChange => {
    stateChange(true);
  };

  const handleBlur = stateChange => {
    stateChange(false);
  };

  function toggleEye() {
    Setpasscheck(!passcheck);
  }
  useEffect(() => {
    GoogleSignin.configure({
    webClientid:'797521806911-re03641dksu3etb6ut578acrolkasf1g.apps.googleusercontent.com',
   }) }, []);
  const Googlelogin = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };
  const SignOut = async () => {
    try {
      await GoogleSignin.signOut();
      // console.log(user,"user")
      console.log(SignOut);
      this.setUser({user: null});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image style={Styles.arrow} source={ImagePath.icBack}></Image>
      </TouchableOpacity>
      <View>
        <Text style={Styles.account}>{strings.create_Account}</Text>
      </View>
      <View style={{marginBottom: moderateScale(30), height: 50}}>
        <TextField
          placeholder={strings.fullName}
          value={FullName}
          Focus={() => handleFocus(setIsFocusedFullName)}
          Blur={() => handleBlur(setIsFocusedFullName)}
          onChangeText={val => SetFullName(val)}
          maxLength={15}
          isFocused={isFocusedFullName}
        />
      </View>
      <View style={{marginBottom: moderateScale(30), height: 50}}>
        <TextField
          value={Email}
          onChangeText={value => SetEmail(value)}
          Focus={() => handleFocus(setIsFocusedEmail)}
          Blur={() => handleBlur(setIsFocusedEmail)}
          blurOnSubmit
          placeholder={'Email'}
          isFocused={isFocusedEmail}
        />
      </View>
      <View style={{marginBottom: moderateScale(30), height: 50}}>
        <TextField
          value={pass}
          onChangeText={value => SetPass(value)}
          Focus={() => handleFocus(setIsFocusedPassword)}
          Blur={() => handleBlur(setIsFocusedPassword)}
          blurOnSubmit
          placeholder={strings.Pass}
          isFocused={isFocusedPassword}
          passwordInput={true}
          passcheck={passcheck}
          toggleEye={toggleEye}
          maxLength={8}
        />
      </View>
      <View style={Styles.Services}>
        <Text style={Styles.terms}>{strings.Agree}</Text>
        <Text style={Styles.termservice}>{strings.Services}</Text>
        <Text style={Styles.terms}>{strings.and}</Text>
        <Text style={Styles.policy}>{strings.Policy}</Text>
      </View>
      <Custombtn onPress={gotosetpass} title={strings.Continue} />
      <View style={Styles.orborder}>
        <View style={Styles.orline}></View>
        <Text style={Styles.or}>{strings.or}</Text>
        <View style={Styles.orline1}></View>
      </View>
      <Btnsocial onPress={Googlelogin}
        socialimg={ImagePath.icGoogle}
        title={strings.Google_account}
      />
          <TouchableOpacity style={Styles.sign}>
          <Text onPress={SignOut} style={Styles.signout}>
            SignOut
          </Text>
        </TouchableOpacity>
    </View>
  );
};
