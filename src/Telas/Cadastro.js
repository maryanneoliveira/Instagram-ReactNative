import { View, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native";
import Logo from "../componentes/Logo";
import MeuBotao2 from "../componentes/MeuBotao2";

export default function Cadastro(){
    return(
 <View style={styles.container}>
        <Logo></Logo>

        <TextInput style={[styles.textInput,{marginTop:12}]} placeholder='your email'></TextInput>

        <TextInput secureTextEntry={true} style={[styles.textInput,{marginTop:12}]} placeholder=' Password'></TextInput>

        <TextInput secureTextEntry={true} style={[styles.textInput,{marginTop:12}]} placeholder='Confirm your password'></TextInput>

     <TouchableOpacity onPress={() => {alert(`OI`)}}> 
      <Text style={styles.textoMostrarSenha}>Show</Text>
      </TouchableOpacity>

        <MeuBotao2> </MeuBotao2>


        </View>
    )
}

const styles= StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    },

    textInput:{
        width:'70%',
        borderWidth: 0.2,
        borderColor:'#000',
        height:40,
        padding:6,
        borderRadius:5
    },

    textoMostrarSenha:{
        fontSize:11,
        fontWeight:"bold",
        color:"#2584f4",
        marginTop:12,
        marginLeft:250
    }
})