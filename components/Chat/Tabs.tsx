import {  useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const data=[
    "Chats",
    "Status",
    "Calls"
]
export default function Tabs(){
    const [selectedTab,setSelectedTab] = useState('Chats')
    return(
        <View style={styles.root}>
            {
                data.map((value,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={()=>setSelectedTab(value)} style={selectedTab===value?styles.selectedButton:styles.button}>
                            <Text  style={selectedTab===value?styles.selectedTab:styles.tabsText} >{value}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
       display:"flex",
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-around",
       width:"100%",
    },
    tabsText:{
        color:"white",
        fontSize:15
    },
    selectedTab:{
        fontWeight:"bold",
        color:"white",
        fontSize:15
    },
    button:{
        paddingBottom:10
    },
    selectedButton:{
        borderBottomWidth:4,
        paddingBottom:10,
        borderColor:"white",

    }
})