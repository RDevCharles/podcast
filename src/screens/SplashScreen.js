import React from 'react';
import {View, Text} from 'react-native';

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate("Legal")
    }, 3000);

    return (
        <View style={{flex: 1,backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
            
            <Text style={{color: 'white'}}>Splash</Text>

        </View>
    )
}

export default SplashScreen;