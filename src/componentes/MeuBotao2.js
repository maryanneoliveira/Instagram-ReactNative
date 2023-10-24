import { TouchableOpacity, StyleSheet, Text} from "react-native";
export default function MeuBotao2(){
    return(

        <TouchableOpacity style={styles.button}>
            <Text style={styles.texto}> Register </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#2584f4',
        width:'70%',
        height:30,
        borderRadius:2,
        justifyContent:'center',
        margin:20,
        marginBottom:225

    },
    texto:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:"center"
      
       
    }
})