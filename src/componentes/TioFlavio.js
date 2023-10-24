import React from 'react';
import { StyleSheet,Image } from 'react-native';

export default function TioFlavio() {
 return (
   <Image style = {styles.tiof} source={require("../../assets/tioFlavio.png")}>

   </Image>
  );
}

const styles=StyleSheet.create({
  tiof:{
    width:430,
    height:400
  }

})

