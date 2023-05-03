import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🤔</Text>
      <Text style={styles.text}> Quanto que eu pago?</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BA40",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "#FFF",
    fontSize: "20px",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "40px",
  },
});
