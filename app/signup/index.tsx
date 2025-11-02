import Button from "@/components/Common/Button";
import Arrow from "@/components/Signup/Arrow";
import Logo from "@/components/Signup/Logo";
import SocialMedia from "@/components/Signup/SocialMedia";
import { RelativePathString } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Signup(){
    return(
        <View style={styles.root}>
            <Arrow />
            <View style={styles.conatiner}>
                <Logo />
                <View style={styles.container2}>
                <Text style={styles.text}>Let's you in</Text>
                <SocialMedia />
                <Text style={styles.OR}>OR</Text>
                <Button title="Sign in" link={'numberlogin' as RelativePathString} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        paddingTop:50,
        paddingLeft:30,
        paddingRight:30
    },
    conatiner:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:1
    },
    text:{
        fontSize:50,
        fontWeight:"700",
    },
    container2:{
        display:"flex",
        flexDirection:"column",
        gap:25,
        alignItems:"center",
        width:"100%"
    },
    OR:{
        fontSize:22,
        fontWeight:"bold"
    }
})