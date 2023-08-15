import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import "../global.css";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-red-200 ">
      <Text className="font-bold text-xl text-center ">
        Open up App.tsx to start working on your app!
      </Text>

      <TouchableOpacity className="bg-yellow-700 p-4 rounded-lg mt-4 ">
        <Text className="text-white font-bold ">Click-Me</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
