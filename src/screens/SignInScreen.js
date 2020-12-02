import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StyleSheet
} from "react-native";
import t from 'tcomb-form-native';

const User = t.struct({
    email: t.String,
    password: t.String,
    terms: t.Boolean

})

const Form = t.form.Form

const SignInScreen = () => {
  return (
    <SafeAreaView>
          <Form type={User}/>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: "black",
    height: "100%"
  },


  articleText: {
    color: "white",
    marginTop: 20
  }
});

export default SignInScreen;
