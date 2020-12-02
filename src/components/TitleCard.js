import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import VideoScreen from '../screens/VideoScreen';


const TitleCard = (props) => {
    const navigation = useNavigation();
    return (
        <View style={titleCardstyles.container}>
        
        <TouchableOpacity onPress={() => navigation.navigate( "Video" ) }>
        <Image style={titleCardstyles.image} source={require('../assests/images/person.jpg')} />
        <Text style={titleCardstyles.title}>{props.title}</Text>
            </TouchableOpacity>
</View>
    )

}

const titleCardstyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
    },
    image: {
        width: '100%',
        height: 250,
       
      
    },
    title: {
        width: 150,
        marginTop: 10,
        marginBottom: 50,
        marginLeft:10,
        color: 'white',
        textAlign:'left'
    }
    
})

export default TitleCard;





