import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native';
import {Styles} from './TutorialStyles';
import ImagePath from '../../constants/ImagePath';
import Customtext from '../../Components/Customtext';
import strings from '../../constants/strings';
import React, {useState, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width + 40;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    url: ImagePath.icBanner1,
  },
  {
    id: 2,
    url: ImagePath.icBanner2,
  },
  {
    id: 3,
    url: ImagePath.icBanner3,
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={item.url}
        style={{width: 360, height: 500, marginRight: 20}}
      />
    </View>
  );
};
export const Tutorial = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={Styles.main}>
      <View style={Styles.header}>
        <Image style={{width: 150, height: 40}} source={ImagePath.iclog} />
      </View>
      <View style={{marginVertical: 15}}>
        <Carousel
          layout={'default'}
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          autoplay={true}
          loop={true}  
          onSnapToItem={index => setIndex(index)}
        />
      </View>
      <View style={Styles.downbtn}>
        <View>
          <Customtext
            onPress={() => navigation.navigate('Register')}
            title={strings.create_Account}
          />
        </View>
        <TouchableOpacity style={Styles.LoginAccount}>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={Styles.Login}>
            {strings.Login}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
