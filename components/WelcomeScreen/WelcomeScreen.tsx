import { RelativePathString} from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Button from "../Common/Button"
const p1 = require('../../assets/images/people/p1.png')
const p2 = require('../../assets/images/people/p2.png')
const p3 = require('../../assets/images/people/p3.png')
const p4 = require('../../assets/images/people/p4.png')
const p5 = require('../../assets/images/people/p5.png')
const p6 = require('../../assets/images/people/p6.png')
const p7 = require('../../assets/images/people/p7.png')
const p8 = require('../../assets/images/people/p8.png')
const p9 = require('../../assets/images/people/p9.png')

const avatar = [
    {
        photo: p1,
        backgroundColor: "#FA8B75",
        circleSize: 85,
        size: 75,
        top: 370,
        left: 300
    },
    {
        photo: p2,
        backgroundColor: "#D5D8DB",
        circleSize: 70,
        size: 60,
        top: 390,
        left: 100
    },
    {
        photo: p3,
        backgroundColor: "#A1F17D",
        circleSize: 100,
        size: 90,
        top: 400,
        left: 190
    },
    {
        photo: p4,
        backgroundColor: "#9DA7FC",
        circleSize: 120,
        size: 120,
        top: 120,
        left: 240
    },
    {
        photo: p5,
        backgroundColor: "#D5D8DB",
        circleSize: 70,
        size: 63,
        top: 280,
        left: 280
    },
    {
        photo: p6,
        backgroundColor: "#72E1FA",
        circleSize: 80,
        size: 75,
        top: 210,
        left: 5
    },
    {
        photo: p7,
        backgroundColor: "#F7CC6B",
        circleSize: 70,
        size: 66,
        top: 330,
        left: 20
    },
    {
        photo: p8,
        backgroundColor: "#FA8B75",
        circleSize: 150,
        size: 147,
        top: 220,
        left: 100
    },
    {
        photo: p9,
        backgroundColor: "#F7CC6B",
        circleSize: 100,
        size: 90,
        top: 100,
        left: 60
    },

]
export default function WelcomeScreen() {
    return (
        <View style={styles.root}>
            <View>
                {
                    avatar.map((value, index) => {
                        return (
                            <View style={{
                                width: value.circleSize,
                                height: value.circleSize,
                                borderRadius: "50%",
                                backgroundColor: value.backgroundColor,
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                position: "absolute",
                                top: value.top,
                                left: value.left,
                            }}
                                key={index}
                            >
                                <Image source={value.photo} style={{ width: value.size, height: value.size, }} />
                            </View>
                        )
                    })
                }
            </View>
            <View style={styles.welcomeView}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                <Text style={styles.welcomeText}>Welcome to Hichat!</Text>
                <View style={styles.descriptionView}>
                    <Text>The best messagenger and chat app of the</Text>
                    <Text>century to make your day greate</Text>
                </View>
                </View>
                <Button title="Get Started" link={'/signup' as RelativePathString} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        position: "relative",
    },
    welcomeView:{
        position:"absolute",
        top:550,
        width:"100%",

    },
    welcomeText:{
        color:"#2A66FF",
        fontSize:35,
        fontWeight:"bold"
    },
    container:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        gap:50,
    },
    descriptionView:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    container2:{
        display:"flex",
        flexDirection:"column",
        gap:10
    }

})