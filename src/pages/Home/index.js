import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'

const list = [
  {
    id: 1,
    label: 'Conta de energia',
    value: '250,00',
    date: '12/04/2022',
    type: 0 //gastos
  },
  {
    id: 2,
    label: 'Pix Rudiardi',
    value: '6.400,00',
    date: '12/06/2023',
    type: 1 //entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.500,00',
    date: '11/12/2022',
    type: 1 //entradas
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header name='Erickson Automotivo'/>  
      <Balance saldo='15.430,00' gastos='565,00' />
      <Text style={styles.title}>Ultimas Movimentações</Text>
      <FlatList
        style = {styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments  data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFCDE0',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:14,
    marginRight:14,
    marginTop:14,
    color:'#3B3355'
  },
  list:{
    marginStart:14,
    marginEnd:14
  }
});
