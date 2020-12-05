import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Flatlist, SafeAreaView, Button } from "react-native";
import { Video } from 'expo-av';



const VideoScreen = ({ navigation }) => {


    return (
      <View style={vidStyles.vidContainer}>
     
             <Video
  source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/media-app-1ef3c.appspot.com/o/videos%2FScreen%20Recording%202020-11-28%20at%209.58.57%20PM.mp4?alt=media&token=3fe3ea19-d969-47ee-93c2-38078eb0588e' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
                isLooping
                useNativeControls
  style={{ width: '100%', height: 300 }}
/>
        </View>
       
    )
}

const vidStyles = StyleSheet.create({
    vidContainer: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default VideoScreen