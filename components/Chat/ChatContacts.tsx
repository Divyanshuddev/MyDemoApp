import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    name: "Riya",
    lastMessage: "See you soon!",
    lastMessageTime: "09:42 AM",
    unread: 2
  },
  {
    photo: p2,
    backgroundColor: "#D5D8DB",
    name: "Ishaan",
    lastMessage: "Can you send the file?",
    lastMessageTime: "Yesterday",
    unread: 1
  },
  {
    photo: p3,
    backgroundColor: "#A1F17D",
    name: "Noah",
    lastMessage: "Let's catch up later.",
    lastMessageTime: "10:22 AM",
    unread: 0
  },
  {
    photo: p4,
    backgroundColor: "#9DA7FC",
    name: "Advait",
    lastMessage: "waite",
    lastMessageTime: "now",
    unread: 3
  },
  {
    photo: p5,
    backgroundColor: "#D5D8DB",
    name: "Maya",
    lastMessage: "Ok done.",
    lastMessageTime: "Mon",
    unread: 0
  },
  {
    photo: p6,
    backgroundColor: "#72E1FA",
    name: "Naman",
    lastMessage: "Call me when free.",
    lastMessageTime: "07:15 PM",
    unread: 4
  },
  {
    photo: p7,
    backgroundColor: "#F7CC6B",
    name: "Kabir",
    lastMessage: "That was awesome 😂",
    lastMessageTime: "11:01 AM",
    unread: 1
  },
  {
    photo: p8,
    backgroundColor: "#FA8B75",
    name: "Simran",
    lastMessage: "Thanks!",
    lastMessageTime: "2 days ago",
    unread: 0
  },
  {
    photo: p9,
    backgroundColor: "#F7CC6B",
    name: "Natasha",
    lastMessage: "Meet tomorrow?",
    lastMessageTime: "Yesterday",
    unread: 6
  },
]


export default function ChatContacts(){
    const router = useRouter();
    return(
        <View style={styles.root}>
            {
                avatar.map((value,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={()=>router.navigate('/ChatScreen/Index')}>
                            <View style={styles.container1}>
                                <View style={styles.constainer2}>
                                <View style={[styles.avatar,{backgroundColor:value.backgroundColor}]}>
                                <Image source={value.photo} style={styles.profilePhoto} />
                                </View>
                                <View>
                                    <Text style={styles.name}>{value.name}</Text>
                                    <Text style={styles.message}>{value.lastMessage}</Text>
                                </View>
                                </View>
                                <View style={styles.timming}>
                                    <Text style={styles.timmingText}>{value.lastMessageTime}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        padding:20,
        display:"flex",
        flexDirection:"column",
        gap:25,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:"50%",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    profilePhoto:{
        width:45,
        height:45
    },
    container1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    constainer2:{
        display:"flex",
        flexDirection:"row",
        gap:20,
        alignItems:"center"
    },
    name:{
        fontWeight:"700",
        fontSize:18,
        fontFamily:"roboto"
    },
    message:{
        color:"gray",
        fontSize:12
    },
    timming:{
        display:"flex",
        justifyContent:"flex-end"
    },
    timmingText:{
        color:"gray",
        fontSize:11
    }
})