import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";

const ArticleReadPage = ({ route, navigation }) => {
  const { articleText, articleImage, articleSummary } = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "black", height: "100%" }}>
        <Text style={{ color: "white", marginTop: 20 }}>{articleSummary}</Text>
        <Image
          style={{
            width: "100%",
            height: 250,
            marginTop: 20
          }}
          source={{ uri: `${articleImage}` }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Icon name="bookmark" color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.articleText}>
          {articleText}
        </Text>
        <Text style={{ color: "white", marginTop: 40 }}>
          Written by : SomeName
        </Text>
      </ScrollView>
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

export default ArticleReadPage;
