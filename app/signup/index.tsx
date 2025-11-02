import Arrow from "@/components/Common/Arrow";
import Button from "@/components/Common/Button";
import Logo from "@/components/Signup/Logo";
import SocialMedia from "@/components/Signup/SocialMedia";
import { Link, RelativePathString } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Signup(){
    return(
        <View style={styles.root}>
            <Arrow link={'/' as RelativePathString} />
            <View style={styles.conatiner}>
                <Logo />
                <View style={styles.container2}>
                <Text style={styles.text}>Let's you in</Text>
                <SocialMedia />
                <Text style={styles.OR}>OR</Text>
                <Button title="Sign in" link={'numberlogin' as RelativePathString} />
                <Text style={styles.accountText}>Don't have an account <Link href={'/'} style={styles.link}>Sign up</Link></Text>
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
        fontSize:30,
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
        fontSize:15,
        fontWeight:"bold"
    },
    link:{
        color:"#2A66FF",
        fontWeight:"bold"
    },
    accountText:{
        color:"gray"
    }
})