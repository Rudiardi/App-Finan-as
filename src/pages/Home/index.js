import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'

export default function App() {
  return (
    <View style={styles.container}>
      <Header name='Ramon Wesley'/>  
      <Balance saldo='15.430,00' gastos='565,00' />
      <Text style={styles.title}>Ultimas Movimentações</Text>
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
  }
});
