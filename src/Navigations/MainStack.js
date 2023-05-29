import {View, Text} from 'react-native';
import React from 'react';
import {Bottomtab} from './Bottomtab';
import {Toptabs} from '../Components/Toptabs';
import Catogeries from '../Screens/Catogeries/Catogeries';
import All from '../Screens/All/All';
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'Bottomtab'}
        component={Bottomtab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Toptabs'}
        component={Toptabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Catogeries'}
        component={Catogeries}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'All'}
        component={All}
        options={{headerShown: false}}
      />
    </>
  );
}
