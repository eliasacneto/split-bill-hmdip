import { StatusBar, Text, View } from "react-native";
import { Container, TitleHeader } from "./style";
import { SummaryMenu } from "../../src/components/SummaryMenu/SummaryMenu.js";
import React from "react";

const Home = () => {
  return (
    <Container>
      <StatusBar />
      <TitleHeader>Quanto fica pra cada? 🤔</TitleHeader>
      <SummaryMenu/>
    </Container>
  );
};

export default Home;
