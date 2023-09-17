import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Chat() {
  return (
    <View className="flex-1 mt-4">
      <View className="flex-row mr-4 ml-4">
        <Image
          className="w-12 h-12 bg-emerald-700 rounded-3xl items-center justify-center"
          source={require("../../assets/images/terezinha.jpeg")}
        />
        <View className="flex-1 border-b-0 ml-4 mb-3 pb-4">
          <View className="flex-row items-center justify-between mb-0.5 mt-1">
            <Text className="text-base font-bold">Teresinha</Text>
            <Text className="text-xs text-neutral-500">10:37</Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-sm text-neutral-500 w-11/12"
              numberOfLines={1}
            >
              Firebase é uma plataforma desenvolvida pelo Google para a criação
              de aplicativos móveis e da web.
            </Text>
            <View className="h-5 w-6 rounded-2xl bg-emerald-600 items-center justify-center">
              <Text className="text-xs text-white font-semibold">4</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row mr-4 ml-4">
        <Image
          className="w-12 h-12 bg-emerald-700 rounded-3xl items-center justify-center"
          source={require("../../assets/images/murilo.jpeg")}
        />
        <View className="flex-1 border-b-0 ml-4 mb-3 pb-4">
          <View className="flex-row items-center justify-between mb-0.5 mt-1">
            <Text className="text-base font-bold">Murilo</Text>
            <Text className="text-xs text-neutral-500">10:36</Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-sm text-neutral-500 w-11/12"
              numberOfLines={1}
            >
              deixa eu ver se eu entendi, o firebase serve pra voce criar o
              backend ou para integrar o backend com o front end ?
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row mr-4 ml-4">
        <Image
          className="w-12 h-12 bg-emerald-700 rounded-3xl items-center justify-center"
          source={require("../../assets/images/benicio.jpeg")}
        />
        <View className="flex-1 border-b-0 ml-4 mb-3 pb-4">
          <View className="flex-row items-center justify-between mb-0.5 mt-1">
            <Text className="text-base font-bold">Benício</Text>
            <Text className="text-xs text-neutral-500">Ontem</Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-sm text-neutral-500 w-11/12"
              numberOfLines={1}
            >
              criar o back-end aí você pega o front e integra nele
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row mr-4 ml-4">
        <Image
          className="w-12 h-12 bg-emerald-700 rounded-3xl items-center justify-center"
          source={require("../../assets/images/raimunda.jpeg")}
        />
        <View className="flex-1 border-b-0 ml-4 mb-3 pb-4">
          <View className="flex-row items-center justify-between mb-0.5 mt-1">
            <Text className="text-base font-bold">Raimunda</Text>
            <Text className="text-xs text-neutral-500">15/09/2023</Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-sm text-neutral-500 w-11/12"
              numberOfLines={1}
            >
              alguem sabe se essa live ele deixa salvo?
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row mr-4 ml-4">
        <Image
          className="w-12 h-12 bg-emerald-700 rounded-3xl items-center justify-center"
          source={require("../../assets/images/marlene.jpeg")}
        />
        <View className="flex-1 border-b-0 ml-4 mb-3 pb-4">
          <View className="flex-row items-center justify-between mb-0.5 mt-1">
            <Text className="text-base font-bold">Marlene</Text>
            <Text className="text-xs text-neutral-500">15/09/2023</Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-sm text-neutral-500 w-11/12"
              numberOfLines={1}
            >
              acho muito cedo esse horarrio
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row mr-4 ml-4">
        <Image
          className="w-12 h-12 bg-emerald-700 rounded-3xl items-center justify-center"
          source={require("../../assets/images/catarina.jpeg")}
        />
        <View className="flex-1 border-b-0 ml-4 mb-3 pb-4">
          <View className="flex-row items-center justify-between mb-0.5 mt-1">
            <Text className="text-base font-bold">Catarina</Text>
            <Text className="text-xs text-neutral-500">15/09/2023</Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-sm text-neutral-500 w-11/12"
              numberOfLines={1}
            >
              Boa tarde. Sucesso para você!
            </Text>
            <View className="h-5 w-6 rounded-2xl bg-emerald-600 items-center justify-center">
              <Text className="text-xs text-white font-semibold">6</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity className="absolute bottom-7 right-5 bg-emerald-600 w-14 h-14 rounded-2xl items-center justify-center">
        <MaterialCommunityIcons
          name="android-messages"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}
