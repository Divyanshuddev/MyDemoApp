import { StyleSheet, Text, View } from "react-native";
import Arrow from "../Common/Arrow";
import { RelativePathString } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
export default function Header(){
    return(
        <View style={styles.root}>
            <View style={styles.nameView}>
                <Arrow link={'/chat' as RelativePathString} color="white" />
                <Text style={styles.name}>Noah</Text>
            </View>
            <View style={styles.tools}>
                <Ionicons name="call" size={20} color="white" />
                <FontAwesome name="video-camera" size={20} color="white" />
                <Entypo name="dots-three-vertical" size={20} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor: "#2A66FF",
        width: "100%",
        height: 110,
        boxSizing: "border-box",
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    nameView:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:20,
    },
    name:{
        color:"white",
        fontSize:22,
        fontWeight:'700'
    },
    tools:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:15
    }
})