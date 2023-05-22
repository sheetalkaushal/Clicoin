import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagePath from '../../constants/ImagePath';
import {useSelector} from 'react-redux';
import {Style} from './AllStyle';
const All = () => {
  const apivalue = useSelector(state => state.status.apiupdate);
  return (
    <View>
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
            <View style={Style.counting}>
              <Text style={Style.count}>{item.current_price}</Text>
              <Text style={Style.countdown}>
                {item.price_change_percentage_24h}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default All;
