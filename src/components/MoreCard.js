import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";


const MoreCard = props => {
  return (
    <View style={{ height: "auto", marginTop: 20 }}>
      <ImageBackground
        style={{
          width: 75,
          height: 75,
          borderRadius: 15,
          flexDirection: "row",
          marginLeft: 20
        }}
        source={{ uri: `${props.pic}` }}
      >
        <View
          style={{
            marginLeft: 100
          }}
        >
          <Text style={{ width: "60%", color: "white", textAlign: "left" }}>
            {props.summary}
          </Text>
          <Text style={{ color:'grey'}}>{props.type}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

styles = StyleSheet.create({
  container: {},
  image: {
    width: "100rem",
    height: 450,
    borderRadius: 15
  },
  type: {
    marginLeft: 100
  }
});

export default MoreCard;
