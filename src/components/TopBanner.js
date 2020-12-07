import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TopBanner = (props) => {
  return (
    
      <View style={styles.topBanner}>
        <Text style={{ color: "white", textAlign: "center", marginTop: 20 , fontSize: 20,  }}>
          {props.title}
        </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({

  topBanner: {
    width: "100%",
    height: 65,
    color: "blue",
    backgroundColor: "black",
    position: "relative",
    margin: 0,
    fontFamily: 'Inter_900Black' ,
    padding: 0
  }
});

export default TopBanner;
