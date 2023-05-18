import { View, Text, Image } from "react-native";
import React from "react";
import ImagePath from "../../constants/ImagePath";
import { Style } from "./WatchStyle";
import Custombtn from "../../Components/Custombtn";
import Customtext from "../../Components/Customtext";
import { moderateScale } from "react-native-size-matters";
import strings from "../../constants/strings";
const Watchlist = ({ navigation }) => {
  return (
    <View style={Style.Watch}>
      <View style={Style.glasimg}>
        <Image source={ImagePath.icglass} />
      </View>
      <View style={Style.shortlist}>
        <Text style={Style.favourite}>{strings.Shortlist_cryptos}</Text>
      </View>
      <View>
        <Text style={Style.Tabicon}>{strings.Shortlist_favourite}</Text>
      </View>
      <View style={Style.explore}>
        <Customtext
          onPress={() => navigation.navigate("Catogeries")}
          title={strings.Explore_Catogeries}
        />
      </View>
    </View>
  );
};

export default Watchlist;
