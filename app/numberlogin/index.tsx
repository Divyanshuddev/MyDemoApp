import Arrow from "@/components/Common/Arrow";
import Button from "@/components/Common/Button";
import { Link, RelativePathString } from "expo-router";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const logo = require('../../assets/images/logo.png')
export default function NumberLogin(){
    return(
        <SafeAreaView style={styles.root}>
            <Arrow link={'/signup' as RelativePathString} color="black" />
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.loginText}>Login to your Account</Text>
                <TextInput style={styles.input} 
                placeholder="+91 987654321"
                placeholderTextColor={'gray'}
                 />
                 <Button title="Sign in" link={'/chat' as RelativePathString} />
                <Text style={styles.accountText}>Don't have an account <Link href={'/'} style={styles.link}>Sign up</Link></Text>
                 
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        paddingTop:50,
        paddingLeft:30,
        paddingRight:30
    },
    container:{
        flex:1,
        alignItems:"center",
        gap:40
    },
    logo:{
        width:200,
        height:200
    },
    loginText:{
        fontSize:25,
        fontWeight:"700"
    },
    input:{
        height:50,
        borderWidth:1,
        width:"100%",
        borderRadius:10,
        padding:20,
        borderColor:"#2A66FF"
    },
    link:{
        color:"#2A66FF",
        fontWeight:"bold"
    },
    accountText:{
        color:"gray"
    }

})