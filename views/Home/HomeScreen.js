import React from "react";
import * as eva from "@eva-design/eva";
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  ApplicationProvider,
  Button,
  Card,
  Input,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { Keyboard, StyleSheet, ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";

const HomeScreen = () => {
  const [value, setValue] = React.useState(0);
  const [taxValue, setTaxValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [totalDue, setTotalDue] = React.useState(0);
  const [shouldShow, setShouldShow] = React.useState(false);
  const displayValue = selectedIndex.row + 2 || 'Selecione a quantidade de pessoas';


  function calculateTotal() {
    if(!value){
      return alert('Campo de total da comanda é obrigatório!')
    }
    const valorConta = parseFloat(value);
    const taxas = valorConta * parseFloat(taxValue) / 100;
    const calculation = (valorConta + taxas) / (displayValue);
    setTotalDue(calculation.toFixed(2));
    setShouldShow(!shouldShow);
  }

  function formReset(){
    setTotalDue(0);
    setTaxValue(0);
    setValue(0);
    setSelectedIndex(0);
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.tab} level='1'>
        <Text category='h4'>Quanto que eu devo pagar? 🤔</Text>
      </Layout>

      <ScrollView>
        <Layout style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Layout>
              <Text style={styles.text}><Ionicons name="receipt" size={24} color="#00e096" /> Qual foi o total da comanda?</Text>
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
              <Text style={styles.text}><FontAwesome name="money" size={24} color="#00e096" /> Informe o valor da % do garçom, ou deixe em branco:</Text>
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
            <Text style={styles.text}><AntDesign name="addusergroup" size={24} color="#00e096" /> Número de pessoas para dividir:</Text>
            <Select
              selectedIndex={selectedIndex}
              placeholder='Selecione a quantidade de pessoas'
              onSelect={(index) => setSelectedIndex(index)}
              value={`${displayValue} pessoas`}
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

        {
          !totalDue ?
            <Button
              style={styles.button}
              size='large'
              status='success'
              appearance='filled'
              onPress={() => {
                calculateTotal();
              }}>
              Calcular valor
            </Button>
            : <Button
              style={styles.button}
              size='large'
              status='success'
              appearance='filled'
              onPress={() => {
                formReset();
                setShouldShow(!shouldShow);
              }}>
              Resetar dados
            </Button>
        }

        {
          shouldShow ?
            <Layout style={styles.containerTotal}>
              <Card style={styles.card} status='success'>
                <Text category='h5'>Você terá que pagar:</Text>
                <Text style={styles.value} category='h2'>
                  R$ {totalDue}
                </Text>
              </Card>
            </Layout>
            : null
        }

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
    marginTop: 10,
  },
  text: {
    color: "#434242",
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    margin: 20,
    fontSize: 28,
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
