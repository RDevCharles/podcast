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

const ArticleReadPage = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "black", height: "100%" }}>
        <Text style={{ color: "white", marginTop: 20 }}>Title Of Article</Text>
        <Image
          style={{
            width: "100%",
            height: 250,
            marginTop: 20
          }}
          source={require("../assests/images/person.jpg")}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Icon name="bookmark" color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Icon name="send" color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.articleText}>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat." "At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio.
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
