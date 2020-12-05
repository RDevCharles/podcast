import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Flatlist,
  SafeAreaView,
  Button,
  ScrollView
} from "react-native";
import TopBanner from "../components/TopBanner";
import MoreCard from "../components/MoreCard";

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <TopBanner title="Saved" />
      <ScrollView>
        <MoreCard
          summary="bdkmfkf wwkmfw fwlmfwlmf fmwlmflw"
          type="video"
        
        />
        <MoreCard
          summary="New bodega diet that actually works"
          type="article"
        
        />

<MoreCard
          summary="How much should you be saving?"
          type="article"
        
        />
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#131314"
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SavedScreen;
