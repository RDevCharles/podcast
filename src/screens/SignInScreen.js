// import React from "react";
// import firebase from "../firebase/firebase";
// import auth from "./src/firebase/firebase";
// import {
//   View,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   Image,
//   StyleSheet,
//   Button

// } from "react-native";
// import t from 'tcomb-form-native';


// const [userCred, setUserCred] = useState({})

// t.form.Form.stylesheet.textbox.normal.color = 'white';
// t.form.Form.stylesheet.controlLabel.normal.color = 'white';






// const User = t.struct({
//     email: t.String,
//     password: t.String,
   
// })



// const Form = t.form.Form

// const SignInScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.articleContainer}>
//       <View style={{ justifyContent: 'center', color: "white", marginTop: 50 }}>
//         <Form type={User} />
//         <Button onPress={() => {
//           setUserCred(User.value);
//           console.log(userCred)
//         }} title="Sign In" />
//         <Button onPress={() => {
//           navigation.navigate("Sign Up")
//         }} title="Sign up"/>
//       </View>
      
//     </SafeAreaView>
//   );
// };

// styles = StyleSheet.create({
//   articleContainer: {
//     flex:1,
//     backgroundColor: "black",
//     color:"white",
//     height: "100%"
//   },


//   articleText: {
//     color: "white",
//     marginTop: 20
//   }
// });

// export default SignInScreen;
