import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import ImagePath from '../../constants/ImagePath';
import {Style} from './LargeStyle';

import color from '../../style/color';
import {useSelector} from 'react-redux';
import MarketHeader from '../../Components/MarketHeader';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Large from '../../Components/Large';
const MIN_HEIGHT = 0;
const LargeCap = () => {
  const apivalue = useSelector(state => state.status.apiupdate);
  let scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  // const navtitle = useRef(null);
  return (
    <View style={Style.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={color.Dark_Sky}
        translucent={true}
      />
      {/* <Animated.View style={{transform: [{translateY: translateY}]}}> */}
        <Large />
      {/* </Animated.View> */}
      {/* <MarketHeader
        navbar={Style.Headernavbar}
        myText={'Large Cap'}
        navbartxt={Style.txt}
        notification={ImagePath.icBack}
      /> */}
      <ImageHeaderScrollView
        maxHeight={280}
        minHeight={MIN_HEIGHT}
        headerImage={ImagePath.icgraph}
        renderHeader={() => {
          return (
            <>
              <ImageBackground
                source={ImagePath.icgraph}
                style={Style.graphimg}>
                <Image style={Style.back} source={ImagePath.icBack} />
                <Text style={Style.largeCap}>Large cap</Text>
                <View style={Style.tokens}>
                  <Text Style={Style.marketToken}>
                    Tokens with market cap of more then $10 billon
                  </Text>
                </View>
              </ImageBackground>
            </>
          );
        }}>
        {/* renderFixedForeground={() => (
          <Animated.View style={{
          transform:[{translateY:translateY}],
          elevation:5,
          zIndex:100,
          }}>
        <MarketHeader  myText={"Large cap"} />
          </Animated.View>
        )} */}
        <View style={Style.bitlist}>
          <TriggeringView>
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
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};

export default LargeCap;
