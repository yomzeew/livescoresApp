import { ActivityIndicator, Image, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Button from "./button";

export default function PlayerInfoPage({ navigation }) {
    return (
        <View className="bg-blue-950 h-full w-full flex">
            <StatusBar />
            <SafeAreaView className="flex-1">
                <View className="p-8 flex items-start space-y-7">
                    <Button
                        text="Back"
                        color="white"
                        iconName="keyboard-backspace"
                        onPress={() => navigation.goBack()}
                    />
                    <View>
                        <Text className="text-white text-3xl">Mason</Text>
                        <Text className="text-white text-3xl font-bold">Burstow</Text>
                    </View>
                    <View>
                        <Text className="text-white text-2xl">Chelsea</Text>
                        <Text className="text-white text-2xl">Football Club</Text>
                    </View>
                    <View className="relative w-screen -left-8">
                        <View className="h-24 bg-blue-700" />
                        <Image
                            source={require("../../assets/chelsea-logo.png")}
                            // resizeMode="contain"
                            className="h-20 w-20 absolute top-2 left-2"
                        />
                    </View>
                    <Image
                        source={require("../../assets/GALLAGHER_Conor_profile_2024-25_avatar-removebg.png")}
                        resizeMode="contain"
                        className="h-80 z-10 absolute left-24 bottom-0"
                    />
                </View>
                <View className="flex flex-row justify-center items-end flex-1 bg-white"></View>
            </SafeAreaView>
        </View>
    )
}