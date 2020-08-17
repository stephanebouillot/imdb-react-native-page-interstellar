import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#212121",
      }}
    >
      <StatusBar style="light" />
      <ScrollView
        style={{
          backgroundColor: "black",
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
        contentContainerStyle={{ backgroundColor: "black" }}
      >
        <View style={styles.container}>
          <View style={styles.haut}>
            <Image
              source={require("./assets/imdb.png")}
              style={styles.logo}
              resizeMode="contain"
            ></Image>
          </View>
          <View style={{ ...styles.marge, marginBottom: 20 }}>
            <Text style={styles.tittle}>Interstellar</Text>
            <Text style={styles.detail}>
              2014 PG-13 2h49min Adventure,Drama,Sci-fi
            </Text>

            <View style={styles.film}>
              <Image
                source={require("./assets/Interstellar.jpg")}
                style={styles.affiche}
                resizeMode="cover"
              ></Image>
              <View style={styles.resume}>
                <Text style={styles.synopsis}>
                  A team of explorers travel throught a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    backgroundColor: "#0277bd",
                    marginTop: 20,
                    padding: 10,
                    borderRadius: 3,
                    // flex: 1,
                  }}
                  onPress={() => {
                    console.log("add to watchlist");
                  }}
                  activeOpacity={0.5}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    + ADD TO WATCHLIST
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.icones}>
              <View style={styles.icone}>
                <Ionicons name="ios-star" size={24} color="yellow" />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    8.6
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 13,
                    }}
                  >
                    /10
                  </Text>
                </View>
                <Text style={styles.iconLastText}>1.1M</Text>
              </View>
              <View style={styles.icone}>
                <Ionicons name="ios-star-outline" size={24} color="white" />
                <Text style={{ ...styles.text, fontSize: 13, marginTop: 4 }}>
                  RATE THIS
                </Text>
              </View>
              <View style={styles.icone}>
                <View style={{ backgroundColor: "green", padding: 2 }}>
                  <Text style={{ color: "white" }}>74</Text>
                </View>
                <Text style={{ ...styles.text, fontSize: 13, marginTop: 4 }}>
                  Metascore
                </Text>
                <Text style={{ ...styles.iconLastText, marginTop: 4 }}>
                  1.1M
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.marge}>
            <View style={styles.cast}>
              <Text style={{ color: "white", fontSize: 30 }}>
                Top Billed Cast
              </Text>
              <Text style={{ color: "#0277bd", fontSize: 18, paddingTop: 10 }}>
                SEE ALL
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.casting}>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/Matthew.jpg")}
                    style={styles.portrait}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorDetails}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Matthew McConaughey
                    </Text>
                    <Text style={styles.role} numberOfLines={1}>
                      Cooper
                    </Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/anne.jpg")}
                    style={styles.portrait}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorDetails}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Anne Hathaway
                    </Text>
                    <Text style={styles.role} numberOfLines={1}>
                      Brand
                    </Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/caine.jpg")}
                    style={styles.portrait}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorDetails}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Mickael Caine
                    </Text>

                    <Text style={styles.role} numberOfLines={1}>
                      Professeur Brand
                    </Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/david.jpg")}
                    style={styles.portrait}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorDetails}>
                    <Text style={styles.actor} numberOfLines={1}>
                      David Gyasi
                    </Text>
                    <Text style={styles.role} numberOfLines={1}>
                      Romilly
                    </Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/helenne.jpg")}
                    style={styles.portrait}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorDetails}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Ellen McRae
                    </Text>
                    <Text style={styles.role} numberOfLines={1}>
                      Murf agee
                    </Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/jessica.jpg")}
                    style={styles.portrait}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorDetails}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Jessica Chastain
                    </Text>
                    <Text style={styles.role} numberOfLines={1}>
                      Murf
                    </Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/macenzie.jpg")}
                    style={styles.portrait}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorDetails}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Mackenzie Foy
                    </Text>
                    <Text style={styles.role} numberOfLines={1}>
                      Murf jeune
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={styles.creation}>
              <Text style={styles.director}>Director</Text>
              <Text style={styles.namedirector}>Christopher Nolan</Text>
            </View>
            <View style={styles.creation}>
              <Text style={styles.director}>Writers</Text>
              <Text style={styles.namedirector}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",

    // alignItems: "center",
    // justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 15,
  },
  haut: {
    height: 70,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#393939",
  },
  logo: {
    height: 50,
    width: 150,
    marginTop: 10,
    marginLeft: 10,
  },
  marge: {
    backgroundColor: "#212121",
    flexDirection: "column",
    padding: 20,
  },

  tittle: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  detail: {
    color: "white",
    fontSize: 15,

    marginBottom: 30,
  },
  film: {
    marginBottom: 20,
    flexDirection: "row",
  },
  affiche: {
    marginRight: 20,
    height: 150,
    width: 110,
  },
  resume: {
    flex: 1,
    flexDirection: "column",
  },
  synopsis: {
    color: "white",
    fontSize: 14,
  },
  icones: {
    flexDirection: "row",
    // borderBottomWidth: 40,
    // borderBottomColor: "black",
  },

  icone: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  cast: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconLastText: {
    color: "#aaa",
    fontSize: 11,
  },
  casting: {
    flexDirection: "row",

    marginTop: 40,
  },
  portrait: {
    flex: 1,
    height: 200,
    width: 140,
  },
  actor: {
    fontSize: 13,
    color: "white",
  },
  role: {
    fontSize: 13,
    color: "#bfbfbf",
  },
  actorContainer: {
    width: 140,
    marginRight: 10,
    backgroundColor: "#2a2a2a",
    borderRadius: 3,
    overflow: "hidden",
  },
  actorDetails: {
    margin: 15,
  },
  creation: {
    flex: 1,
    marginBottom: 15,
  },
  director: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
    marginBottom: 5,
  },
  namedirector: {
    fontSize: 13,
    color: "white",
  },
});

export default App;
