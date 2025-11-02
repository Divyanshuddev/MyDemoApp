import { Image, StyleSheet, Text, View } from "react-native";
const logo = require('../../assets/images/whiteLogo.png')
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Tabs from "./Tabs";

export default function ChatHeader() {
    return (
        <View style={styles.root} >
            <View style={styles.firstContainer}>
                <View style={styles.titleView}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.title}>HiChat</Text>
                </View>
                <View style={[styles.titleView,{gap:20}]}>
                    <FontAwesome name="search" size={24} color="white" />
                    <Ionicons name="settings" size={24} color="white" />
                </View>
            </View>
            <View style={styles.tabView}>
            <Tabs />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#2A66FF",
        width: "100%",
        height: 150,
        boxSizing: "border-box",
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        position:"relative"
    },
    logo: {
        width: 50,
        height: 50
    },
    titleView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "700"
    },
    firstContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tabView:{
        position:"absolute",
        bottom:0,
        width:"100%",

    }
})