import { ActivityIndicator, Image, StyleSheet, View } from "react-native"
const logo = require('../../assets/images/logo.png');

const dotValues = [
  {
    top: 300,
    left: 20,
    size: 40
  },
  {
    top: 220,
    left: 120,
    size: 18
  },
  {
    top: 230,
    left: 260,
    size: 18
  },
  {
    top: 250,
    left: 330,
    size: 30
  },
  {
    top: 370,
    left: 350,
    size: 17
  },
  {
    top: 470,
    left: 360,
    size: 20
  },
  {
    top: 520,
    left: 300,
    size: 45
  },
  {
    top: 580,
    left: 200,
    size: 17
  },
  {
    top: 560,
    left: 120,
    size: 19
  },
  {
    top: 430,
    left: 40,
    size: 25
  },
  {
    top: 520,
    left: 30,
    size: 15
  }

]
export default function Loader() {
  return (
    <View
      style={styles.root}
    >
      <View>
        {
          dotValues.map((value, index) => {
            return (
              <View key={index} style={{
                position: "absolute",
                top: value.top,
                left: value.left,
                width: value.size,
                height: value.size,
                borderRadius: "50%",
                backgroundColor: "#84A3F5"
              }}></View>
            )
          })
        }
      </View>
      <View style={styles.innerRoot}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.loaderView}>
        <ActivityIndicator size={'large'} color={'#84A3F5'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: "relative"
  },
  innerRoot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300
  },
  smallDot: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#84A3F5"
  },
  largeDot: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#84A3F5"
  },
  dotView: {
    position: "absolute"
  },
  loaderView: {
    position: "absolute",
    top: 700,
    left: 180
  }
})
