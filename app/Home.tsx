import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import "../global.css";
import Chat from "./components/Chat";

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <View className="flex-1">
        <StatusBar backgroundColor="#059669" />
        <View className="bg-emerald-600 pt-7 pb-2">
          <View className="flex-row items-center justify-between mx-4">
            <Text className="text-xl text-white font-medium">WhatsApp</Text>
            <View className="flex-row items-center gap-x-4">
              <Feather name="camera" size={20} color="white" />
              <Feather name="search" size={20} color="white" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={20}
                color="white"
              />
            </View>
          </View>
        </View>
        <View className="flex-1 bg-white">
          <Tab.Navigator
            initialRouteName="Conversas"
            screenOptions={{
              tabBarActiveTintColor: "white",
              tabBarIndicatorStyle: {
                backgroundColor: "white",
              },
              tabBarLabelStyle: {
                fontWeight: "bold",
                fontSize: 10,
                textTransform: "capitalize",
              },
              tabBarStyle: {
                backgroundColor: "#069266",
              },
            }}
          >
            <Tab.Screen
              name="comunidade"
              component={Chat}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account-group"
                    size={24}
                    color={color}
                  />
                ),
                tabBarLabelStyle: styles.tabBarLabel,
              }}
            />
            <Tab.Screen name="Conversas" component={Chat} />
            <Tab.Screen name="Status" component={Chat} />
            <Tab.Screen name="Chamadas" component={Chat} />
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    display: "none",
  },
});
