import React from "react";
import { StyleSheet, Text, View} from "react-native";
import TopBanner from '../components/TopBanner';
import { useNavigation } from '@react-navigation/native';




const getAllVideos = () => {

}


const SavedScreen = () => {
  const navigation = useNavigation()
  return (
    <>
      <TopBanner title="About"/>
    <View style={styles.container}>


 
    
        <Text style={styles.headerStyle} >About Legal</Text>
      <Text style={styles.p}>
        {`Legal is a way to share ideas on privacy and technology.
        
I claim no responsibility for the actions taken after viewing content on this platform nor do I encourage any illegal activities after viewing content on this platform.

The content posted is for entertainment purposes only.
        `}</Text>
          
          <Text style={styles.headerStyle}>About The BackEnd</Text>
          <Text style={styles.p}>
          {`Legal is made with a database created by google. So while this app does not collect any data I cannot same the same for your phone or any background services you have running on your device.
        `}</Text>
      
    
      
     
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: 'relative',
    margin: 0,
    
    padding: 30,
    justifyContent: 'center', 
    flexDirection: "column",
    textAlign:'center'
  },

  topBanner: {
    width: '100%',
    height: 60,
    color: 'blue',
    backgroundColor: 'red',
    position: 'relative',
    margin: 0,
    padding: 0
  },
  headerStyle: {
    color: 'white',
    fontSize: 20,
    marginBottom:20
  },
  p: { 
    color:'white'
  }
});

export default SavedScreen;
