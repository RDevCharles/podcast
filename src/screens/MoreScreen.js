import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Flatlist, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import MoreCard from '../components/MoreCard';
import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import TopBanner from "../components/TopBanner";


const MoreScreen = () => {
  const navigation = useNavigation();
  return (
    <>
       <TopBanner title="Articles"/>
    
      
      <ScrollView style={styles.container}>
        <TouchableOpacity  onPress={() => navigation.navigate("AticlesReadPage")}>
          <MoreCard
            
          summary="Another new company made a post and this is the summary"/>
      </TouchableOpacity>
              
              <MoreCard summary="This is the name of the story that is here" />
        <MoreCard summary="This is a new post buy the company" />
        <MoreCard summary="This is the name of the story that is here" />
        <MoreCard summary="This is a new post buy the company" />
        <MoreCard summary="This is the name of the story that is here" />
        <MoreCard summary="This is a new post buy the company" />
        <MoreCard summary="This is the name of the story that is here" />
        <MoreCard summary="This is a new post buy the company" />
        <MoreCard summary="This is the name of the story that is here" />
        <MoreCard summary="This is a new post buy the company" />
        
     
      </ScrollView>
     
     
      </>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131314',
    
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

});


export default MoreScreen

//take out safe area