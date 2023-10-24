import { TouchableOpacity, StyleSheet, Text} from "react-native";


export default function MeuBotao(){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.texto}> Login</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#2584f4',
        width:'70%',
        height:30,
        borderRadius:2,
        justifyContent:'center',
        margin:20,
        marginBottom:100
    },
    texto:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:"center"
      
       
    }
})