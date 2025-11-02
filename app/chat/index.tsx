import ChatContacts from "@/components/Chat/ChatContacts";
import ChatHeader from "@/components/Chat/ChatHeader";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Chat(){
    return(
        <View style={styles.root}>
            <ChatHeader />
            <ScrollView style={styles.root}>
                <ChatContacts />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    scrollView:{
        flex:1,
    }
})
