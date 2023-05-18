import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import strings from '../constants/strings';
import ImagePath from '../constants/ImagePath';
import {Home} from '../Screens/Home/Home';
import Marketing from '../Screens/Marketing/Marketing';
import Portfolio from '../Screens/Portfolio/Portfolio';
import Earns from '../Screens/Earns/Earns';
import {moderateVerticalScale} from 'react-native-size-matters';
import Futures from '../Screens/Futures/Futures';
import color from '../style/color';
const Tab = createBottomTabNavigator();
export const Bottomtab = () => {
  return (
    <Tab.Navigator
      initRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: color.White,
          height: moderateVerticalScale(65),
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
          fontWeight: '500',
        },
        tabBarActiveTintColor: color.Dark_purple,
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,

                  tintColor: focused ? color.Dark_purple : 'grey',
                }}
                source={ImagePath.ichome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Marketing"
        component={Marketing}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused ? color.Dark_purple : 'grey',
                }}
                source={ImagePath.icIncrease}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Earns"
        component={Earns}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused ? color.Dark_purple : 'grey',
                }}
                source={ImagePath.icEaring}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Futures"
        component={Futures}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused ? color.Dark_purple : 'grey',
                }}
                source={ImagePath.icassignment}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused ? color.Dark_purple : 'grey',
                }}
                source={ImagePath.icInvestment}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
