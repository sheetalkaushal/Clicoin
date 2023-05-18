import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './LoginStyle';
import Custombtn from '../../Components/Custombtn';
import ImagePath from '../../constants/ImagePath';
import Btnsocial from '../../Components/Btnsocial';
import strings from '../../constants/strings';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AsyncSendData} from '../../utilis/utilis';
import {datasend, namedata} from '../../redux/actions/action';
import auth from '@react-native-firebase/auth';
import TextField from '../../Components/TextField';
export const Login = ({navigation}) => {
  const [Email, SetEmail] = useState('');
  const [pass, SetPass] = useState('');
  const [passcheck, Setpasscheck] = useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const users = {fullName: Email};
  function gotologin() {
    if (!Email.trim()) {
      alert('enter Email');
    } else if (!pass.trim()) {
      alert('enter password');
    } else {
      namedata(users);
      AsyncSendData('Suggestions', {Email: Email, Password: password});
      datasend(true);
    }
  }
  const handleFocus = stateChange => {
    stateChange(true);
  };

  const handleBlur = stateChange => {
    stateChange(false);
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'797521806911-re03641dksu3etb6ut578acrolkasf1g.apps.googleusercontent.com',
      // offlineAccess: true 
    });
  }, []);
  const googleSignIn = async () => {
   
   // Check if your device supports Google Play
   await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
   // Get the users ID token
   const {idToken} = await GoogleSignin.signIn();
   // Create a Google credential with the token
   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
   // Sign-in the user with the credential
   const res = await auth().signInWithCredential(googleCredential);
   setUser({res});
   console.log('res>>>', res);
  }
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
  const Emailsign = () => {
    auth()
      .createUserWithEmailAndPassword(Email, pass)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  function toggleEye() {
  Setpasscheck(!passcheck)
  }
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={Styles.arrowhelp}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={ImagePath.icBack}></Image>
          <Text style={Styles.help}>{strings.Help}</Text>
        </TouchableOpacity>
        <View style={Styles.createnew}>
          <Text style={Styles.account}>{strings.Login_account}</Text>
        </View>
        <TextField
          value={Email}
          onChangeText={value => SetEmail(value)}
          Focus={() => handleFocus(setIsFocusedEmail)}
          Blur={() => handleBlur(setIsFocusedEmail)}
          blurOnSubmit
          placeholder={'Email'}
          isFocused={isFocusedEmail}
        />
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
        <TouchableOpacity>
          <Text style={Styles.forgot}>{strings.Forgot}</Text>
        </TouchableOpacity>
        <Custombtn onPress={Emailsign} title={strings.Continue} />
        <View style={Styles.orborder}>
          <View style={Styles.orline}></View>
          <Text style={Styles.or}>{strings.or}</Text>
          <View style={Styles.orline1}></View>
        </View>
        <Btnsocial
          onPress={googleSignIn}
          socialimg={ImagePath.icGoogle}
          title={strings.Google_account}
        />
        <TouchableOpacity style={Styles.sign}>
          <Text onPress={SignOut} style={Styles.signout}>
            SignOut
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
