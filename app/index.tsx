import Loader from "@/components/Loader/Loader";
import WelcomeScreen from "@/components/WelcomeScreen/WelcomeScreen";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [loader,setLoader]=useState<boolean>(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },2000)
  },[])
  return (
    <View style={styles.root}>
      {
        loader===true?(
          <Loader />
        ):(
          <WelcomeScreen />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:"center",
    alignContent:"center"
  }

})
