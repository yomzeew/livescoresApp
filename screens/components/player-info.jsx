import { ActivityIndicator, Image, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Button from "./button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { tabData } from "../data/player-info";

export default function PlayerInfoPage({ navigation }) {
    const [selectedTab, setSelectedTab] = useState("Overview");
    return (
        <View className="bg-blue-950 h-full w-full flex">
            <StatusBar />
            <SafeAreaView className="flex-1">
                <View className="p-6 flex items-start space-y-7">
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
                    <View className="relative w-screen -left-8">
                        <View className="h-24 bg-blue-700" />
                        <Image
                            source={require("../../assets/chelsea-logo.png")}
                            // resizeMode="contain"
                            className="h-12 w-12 absolute top-6 left-6"
                        />
                        <View className="absolute top-5 left-[20%]">
                            <Text className="text-white text-xl">Chelsea</Text>
                            <Text className="text-white text-xl">Football Club</Text>
                        </View>
                    </View>
                    <View className="flex flex-row items-center">
                        <MaterialCommunityIcons name="star-outline" size={40} color="white" />
                        <View className="ml-2">
                            <Text className="text-white text-lg font-bold">1.4M</Text>
                            <Text className="text-white text-base">Followers</Text>
                        </View>
                    </View>
                    <Image
                        source={require("../../assets/GALLAGHER_Conor_profile_2024-25_avatar-removebg.png")}
                        resizeMode="contain"
                        className="h-80 z-10 absolute left-24 bottom-0"
                    />
                </View>
                <View
                    className="bg-white"
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {tabData && tabData.map((row, index) => (
                            <TabButtons
                                key={index}
                                text={row.text}
                                onPress={() => setSelectedTab(row.text)}
                                selectedTab={selectedTab}
                            />
                        ))}
                    </ScrollView>
                    {selectedTab === "Overview" && (
                        <>
                            <View className="mt-8">
                                <Text>Overview</Text>
                            </View>
                        </>
                    )}
                </View>
            </SafeAreaView>
        </View>
    )
}

function TabButtons(props) {
    return (
        <TouchableOpacity className="border-b border-b-blue-500 px-3" {...props}>
            <Text className={`text-xl font-bold py-3 ${props.selectedTab === props.text ? "text-blue-950 border-b-2 border-b-blue-950" : "text-blue-500"}`}>{props.text}</Text>
        </TouchableOpacity>
    )
}