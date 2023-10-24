import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../componentes/Logo';
import MeuBotao from '../componentes/MeuBotao';
import { useState } from 'react';
export default function Login() {
  return (
    
    <View style={styles.container}>
        <Logo></Logo>
      
      <TextInput style={[styles.textInput,{marginTop:12}]} placeholder=' Phone number,username or email'></TextInput>

      <TextInput secureTextEntry={true} style={[styles.textInput,{marginTop:12}]} placeholder=' Password'></TextInput>

      <TouchableOpacity onPress={() => {alert(`OI`)}}> 
      <Text style={styles.textoMostrarSenha}>Show</Text>
      </TouchableOpacity>

      <MeuBotao></MeuBotao>
  
      <TouchableOpacity onPress={() => {alert(`OI`)}}> 
      <Text style={styles.textoNaoTemConta}> Don't have an account? Sing Up </Text>
      </TouchableOpacity>

      <View style={styles.linha}>

      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width:'70%',
    borderWidth: 0.2,
    borderColor:'#000',
    height:45,
    padding:6,
    borderRadius:5
  
  },
  textoMostrarSenha:{
    fontSize:11,
    fontWeight:"bold",
    color:"#2584f4",
    marginTop:12,
    marginLeft:250
  },

  textoNaoTemConta:{
    fontSize:11,
    fontWeight:'bold',
    color:"#2584f4",
    marginTop:200,
   alignItems:'center'
  },

  linha:{
    backgroundColor:'#000',
    width:340,
    height:0.5,
    marginTop:-25
  }

});
