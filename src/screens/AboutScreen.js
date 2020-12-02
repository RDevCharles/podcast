import React from "react";
import { StyleSheet, Text, View, Flatlist, SafeAreaView } from "react-native";
import TitleCard from "../components/TitleCard";
import VideoScreen from '../screens/VideoScreen';
import TopBanner from '../components/TopBanner';
import { useNavigation } from '@react-navigation/native';


import { TouchableOpacity } from "react-native-gesture-handler";




const getAllVideos = () => {

}


const SavedScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>


 
      <View
        // data={FAKEDATA} ////// TODO: Make flatlist later
        // renderItem={}
        style={styles.scrollView}
      >
      
          
      
    
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: 'relative',
    margin: 0,
    
    padding: 0
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    margin: 0,
    padding: 0
  },
  topBanner: {
   
    width: '100%',
    height: 60,
    color: 'blue',
    backgroundColor: 'red',
    position: 'relative',
    margin: 0,
    padding: 0
  }
});

export default SavedScreen;
