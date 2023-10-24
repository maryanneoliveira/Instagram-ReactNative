import React from 'react';
import { View, StyleSheet,Image } from 'react-native';

export default function Logo() {
 return (
   <Image style = {styles.logo} source={require("../../assets/logo.png")}>

   </Image>
  );
}

const styles=StyleSheet.create({
  logo:{
    width:200,
    height:50,
    marginTop: 250
  }

})

