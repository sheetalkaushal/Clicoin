import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {Style} from './EarnsStyle';
import ImagePath from '../../constants/ImagePath';
import strings from '../../constants/strings';
const Earns = () => {
  return (
    <View style={Style.container}>
      {/* <LinearGradient
      style={{ marginTop:48 }}
        colors={[Colors.White, Colors.Green]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
     */}
      <View style={Style.uppercontent}>
        <View style={Style.earn}>
          <Text style={Style.introduction}>{strings.INTRODUCING_EARN}</Text>
        </View>
        <View style={Style.GetReturns}>
          <Text style={Style.Cryptos}>{strings.Get_Returns}</Text>
          <Text style={Style.EarnsHodl}>{strings.Earns_while}</Text>
        </View>
        <View style={Style.invested}>
          <Image style={Style.Quickimg} source={ImagePath.icQuick} />
          <Text style={Style.alreadyInvested}>
            <Text style={Style.gradeplus}>100,00+ </Text>
            {strings.users_invested}
          </Text>
        </View>
        <View style={Style.earnings}>
          <View style={Style.earningimg}>
            <Image source={ImagePath.iclearning} />
            <Text style={Style.Earnings}>{strings.Start_earnings}</Text>
          </View>
          <View style={Style.earningimg}>
            <Image source={ImagePath.icEasy} />
            <Text style={Style.Earnings}>{strings.Track_daily}</Text>
          </View>
          <View style={Style.earningimg}>
            <Image source={ImagePath.icLock} />
            <Text style={Style.Earnings}>{strings.No_Periods}</Text>
          </View>
        </View>
      </View>
      {/* </LinearGradient> */}
      <View style={Style.downcontent}></View>
    </View>
  );
};

export default Earns;
