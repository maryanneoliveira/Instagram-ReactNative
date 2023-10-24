import { Text, StyleSheet, View } from "react-native";
import TioFlavio from "../componentes/TioFlavio";
export default function Entrou(){
    return(

     <View style={styles.container}>   
      <TioFlavio> </TioFlavio> 
        <Text style={styles.texto}>
            Login realizado com sucesso!
        </Text>
        

     </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f3ef',
        alignItems: 'center',
        justifyContent: 'center'

    },
  
    texto:{
        fontSize:25,
        marginTop:12,
        fontWeight:'bold',
        color: '#252b4a'
    }


})