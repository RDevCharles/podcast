import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Flatlist,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";

import MoreCard from "../components/MoreCard";
import { useNavigation } from "@react-navigation/native";

import TopBanner from "../components/TopBanner";
import { db } from "../firebase/firebase";


const MoreScreen =  () => {
  const [articles, setArticles] = useState([]);
 

  useEffect(() => {
    const articleData = [];
    return db.collection("articles").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        articleData.push({ ...doc.data(), id: doc.id });

       
      });
      setArticles(articleData);
    });
  }, []);

  console.log(articles)
  
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      
      <TopBanner title="Articles" />
     
      <ScrollView>
        
          {articles.map((article) => {
            return (
              <TouchableOpacity key={article.id} onPress={() => navigation.navigate("AticlesReadPage", {
                article: article.article
              })}>
                <MoreCard
                  summary={article.summary}
                  pic={article.image} />
              </TouchableOpacity>
              
            )
          })}
        
        

      </ScrollView>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131314"
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MoreScreen;

//take out safe area
