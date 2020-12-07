import React, {useState} from "react";
import { AppLoading } from "expo";
import auth from "./src/firebase/firebase";
import {
  StyleSheet,
  Text,
  View,
  Button,
  
 
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MoreScreen from "./src/screens/MoreScreen";
import VideoScreen from "./src/screens/VideoScreen";
import ArticleReadPage from "./src/screens/ArticleReadPage";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SavedScreen from "./src/screens/SavedScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AboutScreen from "./src/screens/AboutScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Bottom = ({ navigation }) => {
   return (
   
    <Stack.Navigator >

      <Stack.Screen
        options={{
          headerTintColor: "white",
          headerShown:false

          // headerStyle: {
          //   backgroundColor: "black",
          //   borderBottomColor: "red",
          //   shadowOffset: {
          //     width: 0
          //   }
          // },

          // headerRight: () => (
          //   <Button
          //     onPress={() => {
          //       navigation.navigate("Sign In");
          //     }}
          //     title="Sign In"
          //     color="white"
          //   />
          // )
        }}
        name="Legal"
        title="home"
        component={HomeScreen}
      />

      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen
        name="AticlesReadPage"
        title="ArticleReadPage"
        component={ArticleReadPage}
      />
      {/* <Stack.Screen name="Sign In" title="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" title="Sign Up" component={SignUpScreen} /> */}
      </Stack.Navigator>
      
  );
};

const App = () => {

 
    return (
      <View style={[styles.container]}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Videos") {
                  iconName = focused ? "ios-videocam" : "ios-videocam";
                } else if (route.name === "Articles") {
                  iconName = focused ? "ios-book" : "ios-book";
                } else if (route.name === "Saved") {
                  iconName = focused ? "ios-bookmark" : "ios-bookmark";
                } else if (route.name === "About") {
                  iconName = focused ? "ios-alert" : "ios-alert";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            })}
            tabBarOptions={{
              activeTintColor: "white",
              inactiveTintColor: "gray",
              style: {
                backgroundColor: "black",
                borderTopColor: "black"
              }
            }}
          >
            <Tab.Screen title="Home" name="Videos" component={Bottom} />

            <Tab.Screen
              options={{}}
              title="Articles"
              name="Articles"
              component={MoreScreen}
            />
            {/* <Tab.Screen name="Saved" component={SavedScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} /> */}
            <Tab.Screen
              title="About"
              name="About"
              component={AboutScreen} />
     
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    )
  

 
    
  };


App.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "black"
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;

//TODO =>
// fix splashscreen for ios
//fix sign in screen
//intergrate firebase auth
//make dynamic ui changes according to auth (this includes saved screen)
//clean up ui





// <Stack.Navigator >

// <Stack.Screen name="Splash" title="Splash" component={SplashScreen}/>
// <Stack.Screen name="SignIn" title="SignIn" component={SignInScreen}/>

// <Stack.Screen
//   options={{
//     headerTintColor: "white",

//     headerStyle: {
//       backgroundColor: "black",
//       borderBottomColor: "red",
//       shadowOffset: {
//         width: 0
//       }
//     },

//     headerRight: () => (
//       <Button
//         onPress={() => {
//           navigation.navigate("Sign In");
//         }}
//         title="Sign In"
//         color="black"
//       />
//     )
//   }}
//   name="Legal"
//   title="home"
//   component={HomeScreen}
// />

// <Stack.Screen name="Video" component={VideoScreen} />
// <Stack.Screen
//   name="AticlesReadPage"
//   title="ArticleReadPage"
//   component={ArticleReadPage}
// />
// <Stack.Screen name="Sign In" title="Sign In" component={SignInScreen} />
// </Stack.Navigator>



// ////////////////////////////////



// <NavigationContainer>
//         <Tab.Navigator 
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;

//               if (route.name === "Home") {
//                 iconName = focused ? "ios-home" : "ios-home";
//               } else if (route.name === "Articles") {
//                 iconName = focused ? "ios-book" : "ios-book";
//               } else if (route.name === "Saved") {
//                 iconName = focused ? "ios-bookmark" : "ios-bookmark";
//               } else if (route.name === "Profile") {
//                 iconName = focused ? "ios-settings" : "ios-settings";
//               }

//               // You can return any component that you like here!
//               return <Ionicons name={iconName} size={size} color={color} />;
//             }
//           })}
//           tabBarOptions={{
//             activeTintColor: "white",
//             inactiveTintColor: "gray",
//             style: {
//               backgroundColor: "black",
//               borderTopColor: "black"
//             }
//           }}
//         >
//           <Tab.Screen title="Home" name="Home" component={Bottom} />

//           <Tab.Screen
//             options={{}}
//             title="Articles"
//             name="Articles"
//             component={MoreScreen}
//           />
//           <Tab.Screen name="Saved" component={SavedScreen} />
//           <Tab.Screen name="Profile" component={ProfileScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>