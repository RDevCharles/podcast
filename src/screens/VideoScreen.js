import React from "react";
import { StyleSheet, Text, View, Flatlist, SafeAreaView, Button } from "react-native";
import { Video } from 'expo-av';
import PexVideo from '../assests/video/pexels.mp4';

const VideoScreen = ({ navigation }) => {
    return (
      <View style={vidStyles.vidContainer}>
     
             <Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
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