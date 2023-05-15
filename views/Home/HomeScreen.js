import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Card,
  Divider,
  Input,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { Keyboard, StyleSheet, ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";

const HomeScreen = () => {
  const [value, setValue] = React.useState("");
  const [taxValue, setTaxValue] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.tab} level='1'>
        <Text category='h4'>Quanto que eu devo pagar? 🤔</Text>
      </Layout>
      <ScrollView>
      <Layout style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Layout>
            <Text style={styles.text}>Qual foi o total da comanda?</Text>
            <Input
              style={styles.input}
              placeholder='Ex: R$160,00'
              value={value}
              size='large'
              keyboardType='numeric'
              onChangeText={(nextValue) => setValue(nextValue)}
            />
          </Layout>

          <Layout>
            <Text style={styles.text}>
              Informe o valor da % do garçom, ou deixe em branco:
            </Text>
            <Input
              style={styles.input}
              placeholder='Ex: 10%'
              value={taxValue}
              keyboardType='numeric'
              onChangeText={(nextTaxValue) => setTaxValue(nextTaxValue)}
            />
          </Layout>
        </TouchableWithoutFeedback>
        <Layout>
          <Text style={styles.text}>Número de pessoas para dividir:</Text>
          <Select
            selectedIndex={selectedIndex}
            placeholder='Selecione a quantidade de pessoas'
            onSelect={(index) => setSelectedIndex(index)}
          >
            <SelectItem title='2 pessoas' />
            <SelectItem title='3 pessoas' />
            <SelectItem title='4 pessoas' />
            <SelectItem title='5 pessoas' />
            <SelectItem title='6 pessoas' />
            <SelectItem title='7 pessoas' />
            <SelectItem title='8 pessoas' />
            <SelectItem title='9 pessoas' />
            <SelectItem title='10 pessoas' />
            <SelectItem title='11 pessoas' />
            <SelectItem title='12 pessoas' />
            <SelectItem title='13 pessoas' />
            <SelectItem title='14 pessoas' />
            <SelectItem title='15 pessoas' />
            <SelectItem title='16 pessoas' />
            <SelectItem title='17 pessoas' />
            <SelectItem title='18 pessoas' />
            <SelectItem title='19 pessoas' />
            <SelectItem title='20 pessoas' />
          </Select>
        </Layout>
      </Layout>
      <Layout style={styles.containerTotal}>
        <Card style={styles.card} status='success'>
          <Text category='h5'>Você terá que pagar:</Text>
          <Text style={styles.value} category='h2'>
            R$160,00
          </Text>
        </Card>
      </Layout>

      <Button
        style={styles.button}
        size='large'
        status='success'
        appearance='filled'
      >
        Calcular valor
      </Button>
      </ScrollView>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },
  containerTotal: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10
  },
  text: {
    color: "#434242",
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    margin: 20,
    fontSize: 28,
    width: "80%",
    color: "#FFF",
    borderRadius: 8,
  },
  tab: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
  },
  value: {
    textAlign: "center",
  },
});

export default HomeScreen;
