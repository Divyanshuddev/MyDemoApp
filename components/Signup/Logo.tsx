import { Image, StyleSheet } from "react-native";
const logo = require('../../assets/images/signup.png')
export default function Logo(){
    return(
        <Image source={logo} style={styles.root}  />
    )
}

const styles = StyleSheet.create({
    root:{
        width:200,
        height:200,
    }
})

