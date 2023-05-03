import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./views/Splash/Splash";
import Home from "./views/Home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Home />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
