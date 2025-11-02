import { RelativePathString, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
type ButtonProps={
    title:string;
    link:RelativePathString;
}
export default function Button({title,link}:ButtonProps) {
    const router = useRouter();
    return (
        <TouchableOpacity style={styles.button} onPress={() => router.navigate(`${link}`)}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#2A66FF",
        width:"80%",
        display:"flex",
        alignItems:"center",
        padding:10,
        borderRadius:40, 
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:18
    },
})