import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.textHeader}>Quanto que eu pago na comanda? 🤔</Text>
      <View style={styles.greenCard}>
        <View style={styles.total}>
          <Text style={styles.textTotal}>Total</Text>
          <Text style={styles.textInput}>R$160,00</Text>
        </View>
        <View>
          <View style={styles.info}>
            <Text style={styles.billInfo}>Comanda:</Text>
            <Text style={styles.billInfo}>R$160,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.billInfo}>Taxa(10%):</Text>
            <Text style={styles.billInfo}>R$16,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.billInfo}>Pessoas:</Text>
            <Text style={styles.billInfo}>7</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#F5F7F9",
    marginLeft: "5%",
    marginRight: "5%",
  },
  textHeader: {
    width: "90%",
    fontWeight: 700,
    fontSize: 24,
    marginTop: 10,
  },
  text: {
    color: "#00BA40",
    fontSize: 20,
  },
  greenCard: {
    backgroundColor: "#00BA40",
    width: "95%",
    height: 130,
    marginTop: 15,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTotal: {
    fontSize: 18,
    color: "#FFF",
    marginLeft: 10,
    fontWeight: 700,
  },
  textInput: {
    fontSize: 22,
    color: "#FFF",
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 700,
  },
  billInfo: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    marginRight: 20,
  },
  total: {
    display: "flex",
    width: 150,
  },
});
