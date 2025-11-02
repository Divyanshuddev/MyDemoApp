import Header from "@/components/ChatScreen/Header";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const chat=[
    {
        message:"Hi",
        timing:"7:30 pm",
        sender:true,
    },
    {
        message:"Hi",
        timing:"7:31 pm",
        sender:false
    },
    {
        message:"I miss youu, or Kya kar rahai hoo ",
        timing:"7:32 pm",
        sender:true 
    },
    {
        message:"Kuch nahi bus coding kar raha hu,sunoo ab message mat karna main bahar ja raha hu dosto ke sath message or call mat karna ake bat karunga",
        timing:"7:33 pm",
        sender:false
    }

]
export default function ChatScreen(){
    return(
        <View style={styles.root}>
            <Header />
            <View style={styles.chatView}>
                <View style={styles.chatTime}>
                    <Text style={styles.chatTimeText}>Today</Text>
                </View>
                    <View style={styles.chating}> 
                        {
                            chat.map((value,index)=>{
                                return(
                                    <View style={value.sender?styles.sender:styles.reciver}>
                                        <Text style={value.sender?styles.senderText:styles.reciverText}>{value.message}</Text>
                                        <View style={styles.messageStatusView}>
                                        <FontAwesome6 name="check-double" size={10} color="white" />
                                        <Text style={value.sender?styles.sTime:styles.rTime}>{value.timing}</Text>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    chatView:{
        flex:1,
        backgroundColor:"whitesmoke",
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        width:"100%",
        gap:20
    },
    chatTime:{
        display:"flex",
        padding:8,
        alignSelf:"center",
        backgroundColor:"#bfbfbf",
        borderRadius:5,
        gap:10
    },
    chatTimeText:{
        fontSize:10,
        color:"gray"
    },
    chating:{
        display:"flex",
        flexDirection:"column",
        gap:20
    },
    reciver:{
        backgroundColor:"#2A66FF",
        padding:15,
        borderTopLeftRadius:22,
        borderTopRightRadius:22,
        borderBottomLeftRadius:22,
        width:"70%",
        display:"flex",
        alignSelf:"flex-end",
        gap:8
    },
    reciverText:{
        color:"white"
    },
    sender:{
        backgroundColor:"#cccccc",
        padding:15,
        borderTopLeftRadius:22,
        borderTopRightRadius:22,
        borderBottomRightRadius:22,
        width:"70%",
        gap:8
    },
    senderText:{
        color:"black"
    },
    messageStatusView:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        justifyContent:"flex-end"
    },
    sTime:{
        color:"black",
        fontSize:11
    },
    rTime:{
        color:"white",
        fontSize:11
    }
})