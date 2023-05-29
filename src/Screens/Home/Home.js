import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../Components/Header';
import ImagePath from '../../constants/ImagePath';
import {Style} from './HomeStyle';
import {GetApi, Getdata, Postdata} from '../../redux/actions/apiaction';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {Cards} from '../../Components/Cards';
import strings from '../../constants/strings';
import {Toptabs} from '../../Components/Toptabs';
import color from '../../style/color';
import {Animated} from 'react-native';


export const Home = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 0,
      }}>
      <Header animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        <View style={{backgroundColor: color.White}}>
          <TouchableOpacity style={Style.iconsorder}>
            <View style={Style.instant}>
              <Image source={ImagePath.icinstant} />
              <Text style={Style.Buy}>{strings.Instant_Buy}</Text>
            </View>
            <View style={Style.instant}>
              <Image source={ImagePath.icbellicon} />
              <Text style={Style.Buy}>{strings.Alerts}</Text>
            </View>
            <View style={Style.instant}>
              <Image source={ImagePath.icsip} />
              <Text style={Style.Buy}>{strings.SIP}</Text>
            </View>
            <View style={Style.instant}>
              <Image source={ImagePath.icorder} />
              <Text style={Style.Buy}>{strings.Orders}</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Toptabs />
          </View>
          <TouchableOpacity style={Style.Catogeries}>
            <Text
              onPress={() => navigation.navigate('Catogeries')}
              style={Style.AllCatogeries}>
              {strings.All_Catogeries}
            </Text>
          </TouchableOpacity>
          <View style={Style.listingPrice}>
            <Text style={Style.price}>{strings.Recently_Listed}</Text>
          </View>

          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 9}}>
            <Cards
              imgSourc={ImagePath.icDoyo}
              coinName={strings.dodo}
              lowerName={strings.dodo}
              categoryname={strings.Defi}
              price={strings.price1}
              bgcolor={color.yellow}
            />
            <Cards
              imgSourc={ImagePath.icspart}
              coinName={strings.Startregy}
              lowerName={strings.STG}
              categoryname={strings.Interoperability}
              price={strings.price2}
              bgcolor={color.grey}
            />
            <Cards
              imgSourc={ImagePath.icholo}
              coinName={strings.HOLO}
              lowerName={strings.HOT}
              categoryname={strings.Layer_lockchain}
              price={strings.price3}
              bgcolor={color.Darker}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// import {
//   View,
//   Text,
//   ScrollView,
//   Dimensions,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView
// } from 'react-native';
// import React, {useRef, useState} from 'react';
// import Header from '../../Components/Header';
// import ImagePath from '../../constants/ImagePath';
// import {Style} from './HomeStyle';
// import {GetApi, Getdata, Postdata} from '../../redux/actions/apiaction';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useSelector} from 'react-redux';
// import {Cards} from '../../Components/Cards';
// import strings from '../../constants/strings';
// import {Toptabs} from '../../Components/Toptabs';
// import color from '../../style/color';
// import { Animated } from 'react-native';
// WIDTH = Dimensions.get('window').width;
// export const Home = ({navigation}) => {
//   let scrollOffsetY = useRef(new Animated.Value(0)).current;
//   const [states, Setstates] = useState(true);
//   const value = useSelector(state => state.status.nameupdate);
//   data = [
//     {id: '1', img: ImagePath.icHolders},
//     {id: '2', img: ImagePath.icdelay},
//   ];
//   const onClick = () => {
//     if (states == true) {
//       Setstates(false);
//       return;
//     }
//     if (states == false) {
//       Setstates(true);
//       return;
//     }
//   };
//   return (
//     <SafeAreaView style={Style.container}>
//       <View style={{}}>
//         <Header animHeaderValue={scrollOffsetY}/>
//         {/* <Header
//           myText={value.fullName}
//            Myimg={ImagePath.icProfile}
//            notification={ImagePath.icnotification}
//        /> */}
//       </View>
//       <ScrollView
//          scrollEventThrottle={16}
//          onScroll={Animated.event(
//            [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
//            {useNativeDriver: false}
//          )}>
//         <View style={{backgroundColor: color.White}}>
//           <TouchableOpacity style={Style.iconsorder}>
//             <View style={Style.instant}>
//               <Image source={ImagePath.icinstant} />
//               <Text style={Style.Buy}>{strings.Instant_Buy}</Text>
//             </View>
//             <View style={Style.instant}>
//               <Image source={ImagePath.icbellicon} />
//               <Text style={Style.Buy}>{strings.Alerts}</Text>
//             </View>
//             <View style={Style.instant}>
//               <Image source={ImagePath.icsip} />
//               <Text style={Style.Buy}>{strings.SIP}</Text>
//             </View>
//             <View style={Style.instant}>
//               <Image source={ImagePath.icorder} />
//               <Text style={Style.Buy}>{strings.Orders}</Text>
//             </View>
//           </TouchableOpacity>
//           <View>
//             <Toptabs />
//           </View>
//           <TouchableOpacity style={Style.Catogeries}>
//             <Text
//               onPress={() => navigation.navigate('Catogeries')}
//               style={Style.AllCatogeries}>
//               {strings.All_Catogeries}
//             </Text>
//           </TouchableOpacity>
//           <View style={Style.listingPrice}>
//             <Text style={Style.price}>{strings.Recently_Listed}</Text>
//           </View>

//           <ScrollView
//             horizontal
//             showsVerticalScrollIndicator={false}
//             showsHorizontalScrollIndicator={false}
//             style={{marginBottom: 9}}>
//             <Cards
//               imgSourc={ImagePath.icDoyo}
//               coinName={strings.dodo}
//               lowerName={strings.dodo}
//               categoryname={strings.Defi}
//               price={strings.price1}
//               bgcolor={color.yellow}
//             />
//             <Cards
//               imgSourc={ImagePath.icspart}
//               coinName={strings.Startregy}
//               lowerName={strings.STG}
//               categoryname={strings.Interoperability}
//               price={strings.price2}
//               bgcolor={color.grey}
//             />
//             <Cards
//               imgSourc={ImagePath.icholo}
//               coinName={strings.HOLO}
//               lowerName={strings.HOT}
//               categoryname={strings.Layer_lockchain}
//               price={strings.price3}
//               bgcolor={color.Darker}
//             />
//           </ScrollView>
//         </View>
//       </ScrollView>
// </SafeAreaView>
//   );
// };
