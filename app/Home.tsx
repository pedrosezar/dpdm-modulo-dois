import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import "../global.css";

export default function Home() {
  return <View className="flex-1 items-center justify-center bg-red-500" />;
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>
  //         Open up App.tsx to start working on your app!
  //       </Text>

  //       <TouchableOpacity style={styles.button}>
  //         <Text>Click-Me</Text>
  //       </TouchableOpacity>

  //       <StatusBar style="auto" />
  //     </View>
  //   );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "yellow",
  },
});
