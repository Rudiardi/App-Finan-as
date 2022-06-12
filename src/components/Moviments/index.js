import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';

export default function Moviments({data}) {
 return (
   <TouchableOpacity style={styles.container}>
    <Text style={styles.date}>{data.date}</Text>
        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            <Text style={data.type===1 ? styles.value : styles.expensives}>{data.type===1?`R$ ${data.value}`:`R$ -${data.value}`}</Text>
        </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:24,
        borderBottomWidth:0.5,
        borderBottomColor: '#5D5D81'
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:2,
        marginBottom:8
    },
    date:{
        color:'#5D5D81',
        fontWeight:'bold'
    },
    label:{
        fontWeight:'bold',
        fontSize:16
    },
    value:{
    fontSize: 16,
    color:'#3B3355',
    fontWeight:'bold'
    },
    expensives:{
    fontSize: 16,
    color:'#5D5D81',
    fontWeight:'bold'
    }
})