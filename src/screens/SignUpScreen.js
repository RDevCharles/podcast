import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import TopBanner from "../components/TopBanner";
import { Input, Block, Button } from 'galio-framework';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#131314", color: "white",  }}>
 
          <ScrollView>
      <View style={{ margin: 20 }}>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            marginBottom: 20
          }}
        >
          Name:
        </Text>
              
        <Input placeholder="regular" />
        <Text
          style={{
            color: "white",
                      textAlign: "left",
                      marginBottom:20
          }}
        >
          Email
        </Text>
        <Input placeholder="regular" />
        <Text
          style={{
            color: "white",
                      textAlign: "left",
                      marginBottom:20
          }}
        >
          Password
        </Text>
        <Input placeholder="password" password viewPass />
      
       
          </View>
          <View style={{marginLeft:20}}>
              <Button color='#737373'>Sign Up</Button>
              </View>
              </ScrollView>
    </View>
  );
};

export default ProfileScreen;
