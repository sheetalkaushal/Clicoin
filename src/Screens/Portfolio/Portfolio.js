import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React from "react";
import { Style } from "./PortfolioStyle";
import ImagePath from "../../constants/ImagePath";
import Btnsocial from "../../Components/Btnsocial";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import strings from "../../constants/strings";
import color from "../../style/color";
const Portfolio = () => {
  return (
    <View style={Style.container}>
      <View style={Style.invest}>
        <Text style={Style.investments}>{strings.You_investments}</Text>
        <View style={Style.Startinvesting}>
          <Text style={Style.popularcoins}>{strings.Start_investing}</Text>
        </View>
      </View>
      <TouchableOpacity style={Style.bits}>
        <Image style={Style.bitimg} source={ImagePath.icbit} />
        <Text style={Style.bitcoin}>{strings.Bitcoin}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Style.cointxt}>
        <Text style={Style.btctext}>{strings.BTC}</Text>
        <Image source={ImagePath.icnavigation} />
      </TouchableOpacity>
      <TouchableOpacity style={Style.Bitcoininvest}>
        <Image style={Style.percentimg} source={ImagePath.icpercent} />
        <Text style={Style.investment}>{strings.users_Bitcoin_investment}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Style.Ethereum}>
        <Image style={Style.bitimg} source={ImagePath.icEth} />
        <Text style={Style.bitcoin}>{strings.Ethererum}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Style.cointxt}>
        <Text style={Style.btctext}>{strings.ETH}</Text>
        <Image source={ImagePath.icnavigation} />
      </TouchableOpacity>
      <TouchableOpacity style={Style.Ripple}>
        <Image style={Style.bitimg} source={ImagePath.icripple} />
        <Text style={Style.bitcoin}>{strings.Ripple}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Style.cointxt}>
        <Text style={Style.btctext}>{strings.XRP}</Text>
        <Image source={ImagePath.icnavigation} />
      </TouchableOpacity>
      <TouchableOpacity style={Style.seeCoins}>
        <Btnsocial
          title={strings.See_coins}
          textstyle={{ fontSize: 18, color: color.Dark_purple }}
          viewStyle={{ borderRadius: 5, borderColor: color.Dark_purple }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Portfolio;
