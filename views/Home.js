import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: "1",
    width: "100%",
    backgroundColor: "#000",
  },
  text: {
    color: "#FFF",
  },
  statusBar: {
    backgroundColor: "#FFF",
  },
});
