import React, { useState, useEffect }from "react";
import { StyleSheet, Text, View, Flatlist, SafeAreaView, ScrollView } from "react-native";
import TitleCard from "../components/TitleCard";
import VideoScreen from '../screens/VideoScreen';
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import TopBanner from '../components/TopBanner';
import { useNavigation } from '@react-navigation/native';


import { TouchableOpacity } from "react-native-gesture-handler";

import { db } from '../firebase/firebase';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();




const HomeScreen = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const videoData = [];
    return db.collection("videos")
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          videoData.push({ ...doc.data(), id: doc.id });
        });
        setVideos(videoData);
    })
  }, [])

  console.log(videos)
  const navigation = useNavigation()
  return (
    <>
      <TopBanner title="Legal"/>
    <ScrollView style={styles.container}>
      <View
        style={styles.scrollView}
      >
        {videos.map(video => {
          return (
            <TitleCard
              key={video.id}
              title={video.title}
              image={video.thumbnail}/>
          )
        })}
       
    
      </View>
      
    </ScrollView>
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131314',
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

export default HomeScreen;
