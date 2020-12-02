import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View, Flatlist, SafeAreaView, Button,  Platform, StatusBar, Container } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import MoreScreen from '../screens/MoreScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const TopStackScreen = ( {Navigation} ) => {

 
  return (
   
<View style={[styles.container,]}>
   
 <NavigationContainer >
  
      
  <Stack.Navigator >
          <Stack.Screen name="Shop Name" component={HomeScreen} />
          <Stack.Screen name="home" name="Looks" component={MoreScreen} />
       

  
</Stack.Navigator>
 </NavigationContainer> 
      </View>
     
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   backgroundColor: 'black'
    
 
  
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

});

export default TopStackScreen