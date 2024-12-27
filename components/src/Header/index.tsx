import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logo}>
        <Image
          style={styles.imgLogo}
          source={require("../../../assets/images/logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.send}>
        <Image
          style={styles.imgSende}
          source={require("../../../assets/images/send.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 4,
  },
  logo: {},
  imgLogo: {},
  send: {},
  imgSende: {
    width: 24,
    height: 24,
  },
});
