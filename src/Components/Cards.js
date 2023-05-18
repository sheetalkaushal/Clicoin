import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ImagePath from "../constants/ImagePath";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { Getdata } from "../redux/actions/apiaction";
import { COIN_CAT } from "../config/urls";
import { getdata } from "../redux/actions/action";
import { useSelector } from "react-redux";
import color from "../style/color";
export const Cards = ({
  imgSourc,
  coinName,
  lowerName,
  categoryname,
  price,
  bgcolor,
}) => {
  // const valueget=useSelector((state)=>state.status.apiload)
  // console.log('vshxg',valueget)
  // useEffect(() => {
  //     Getdata(COIN_POST)
  //       .then((res) => {
  //         getdata(res);

  //       })
  //       .catch((er) => {});
  //   }, []);
  return (
    <View>
      <TouchableOpacity
        style={{ ...Style.coin, ...{ backgroundColor: bgcolor } }}
      >
        <View style={Style.allcontent}>
          <View style={Style.uppertext}>
            <Image style={Style.imgsymbol} source={imgSourc} />
            <Text style={Style.uppertxt}>
              {coinName}
              {"\n"}
              <Text style={Style.lowertxt}>{lowerName}</Text>
            </Text>
          </View>
          <View style={Style.catgory}>
            <Text style={Style.categoryname}>CATEGORY</Text>
            <Text style={Style.namecategory}>{categoryname}</Text>
          </View>
          <View style={Style.pricelist}></View>
          <View>
            <Text style={Style.priceitem}>{price}</Text>
          </View>
          <View style={Style.listingdivide}>
            <Text style={Style.listingprice}>Listing price</Text>
            <View style={Style.imgarrow}>
              <Image source={ImagePath.icarrowright} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const Style = StyleSheet.create({
  coin: {
    backgroundColor: color.yellow,
    width: moderateScale(250),
    paddingHorizontal: moderateScale(23),
    marginHorizontal: moderateScale(10),
    borderRadius: 20,
    marginTop: moderateVerticalScale(20),
  },
  allcontent: {
    marginVertical: moderateVerticalScale(34),
  },
  catgory: {
    marginTop: moderateVerticalScale(23),
  },
  categoryname: {
    color: color.White,
    fontSize: 12,
    letterSpacing: 2,
  },
  imgsymbol: {
    borderRadius: 20,
    marginRight: moderateScale(9),
  },
  uppertxt: {
    color: color.White,
    fontSize: 17,
  },
  lowertxt: {
    color: color.grey_light,
    fontSize: 14,
  },
  namecategory: {
    color: color.grey_light,
    fontSize: 20,
  },
  pricelist: {
    borderTopColor: color.grey_light,
    borderTopWidth: 1,
    marginVertical: moderateScale(23),
  },
  listingprice: {
    color: color.White,
    fontSize: 18,
  },
  priceitem: {
    color: color.White,
    fontSize: 18,
  },
  listingdivide: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgarrow: {
    backgroundColor: color.White,
    borderRadius: 20,
  },
  uppertext: {
    flexDirection: "row",
    alignItems: "center",
  },
});
