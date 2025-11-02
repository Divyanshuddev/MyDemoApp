import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
const facebook = require('../../assets/images/facebook.png')
const google = require('../../assets/images/google.png')
const apple = require('../../assets/images/apple.png')
const data=[
    {
        icon:facebook,
        title:"Continue with Facebook"
    },
    {
        icon:google,
        title:"Continue with Google"
    },
    {
        icon:apple,
        title:"Continue with Apple"
    }
]
export default function SocialMedia(){
    return(
        <View style={styles.root}>
            {
               data.map((value,index)=>{
                return(
                    <TouchableOpacity key={index} >
                    <View style={styles.stack}>
                        <Image source={value.icon} style={index===1?styles.google:styles.icon} />
                        <Text style={styles.text}>{value.title}</Text>
                    </View>
                    </TouchableOpacity>
                )
               })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        width:40,
        height:40
    },
    text:{
        fontSize:17
    },
    stack:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderColor:"gray",
        borderWidth:1,
        padding:10,
        gap:15,
        borderRadius:5
    },
    root:{
        display:"flex",
        flexDirection:"column",
        gap:20
    },
    google:{
        width:35,
        height:35
    }
})