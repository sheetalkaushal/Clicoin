import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {Style} from './LargeStyle';
import ImagePath from '../../constants/ImagePath';
import color from '../../style/color';
import {useSelector} from 'react-redux';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Large from '../../Components/Large';

const LargeCap = () => {
  let scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0,45],
    outputRange:[0,-45]
  });
  const apivalue = useSelector(state => state.status.apiupdate);
  return (
    <View style={Style.container}>
      <Animated.View style={{transform:[
        {translateY:translateY}]
      }}>
        <Large/>

      </Animated.View>

      <ScrollView
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={color.Dark_Sky}
          translucent={true}
        />
        <View>
          <ImageBackground source={ImagePath.icgraph} style={Style.graphimg}>
            <Image style={Style.back} source={ImagePath.icBack} />
            <Text style={Style.largeCap}>Large cap</Text>
            <View style={Style.tokens}>
              <Text Style={Style.marketToken}>
                Tokens with market cap of more then $10 billon
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={Style.bitlist}>
          {apivalue.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={Style.bitcoins}>
                <View style={Style.uppertext}>
                  <Image style={Style.symbol} source={{uri: item.image}} />
                  <Text style={Style.uppertexts}>
                    {item.name}
                    {'\n'}
                    <Text style={Style.lowertext}>{item.symbol}</Text>
                  </Text>
                </View>
                <View>
                  <Text style={Style.count}>{item.current_price}</Text>
                  <Text style={Style.countdown}>
                    {item.price_change_percentage_24h}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default LargeCap;
