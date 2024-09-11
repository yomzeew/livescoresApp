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
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        className="bg-white"
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
                </View>
                <View
                    className="bg-white"
                >
                    <ScrollView
                        className="bg-white"
                    >
                        {selectedTab === "Overview" && (
                            <>
                                <PlayerInfoOverview />
                            </>
                        )}
                        {selectedTab === "News" && (
                            <>
                                <PlayerInfoNews />
                            </>
                        )}
                        {selectedTab === "Season" && (
                            <>
                                <PlayerInfoSeason />
                            </>
                        )}
                        {selectedTab === "Career" && (
                            <>
                                <PlayerInfoCareer />
                            </>
                        )}
                        {selectedTab === "Stats" && (
                            <>
                                <PlayerInfoStats />
                            </>
                        )}
                    </ScrollView>
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

const playerInfoOverviewCardData = [
    {
        initial: true,
        iconName: "calendar",
        color: "white",
        text1: "29 Years",
        text2: "Feb 02, 1992"
    },
    {
        initial: false,
        iconName: "volleyball",
        color: "black",
        text1: "Norwegian,",
        text2: "Chelsea FC"
    },
    {
        initial: false,
        iconName: "tshirt-crew-outline",
        color: "black",
        text1: "Attack",
        text2: "Mid Forward"
    },
    {
        initial: false,
        iconName: "human-male-height",
        color: "black",
        text1: "1.28",
        text2: "Inches"
    },
]

function PlayerInfoOverview(props) {
    return (
        <View className="">
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className="py-4"
            >
                {playerInfoOverviewCardData && playerInfoOverviewCardData.map((row, index) => (
                    <PlayerInfoOverviewCard
                        key={index}
                        initial={row.initial}
                        iconName={row.iconName}
                        color={row.color}
                        text1={row.text1}
                        text2={row.text2}
                    />
                ))}
            </ScrollView>
            <View className="p-4 grid">
                <Text className="font-extrabold text-3xl">Upcoming Game</Text>
                <UpcomingGameTab />
            </View>
            <View className="p-4 grid">
                <Text className="font-extrabold text-3xl">Also in Chelsea FC</Text>
                {/* player cards */}
                <UpcomingGameTab />
                <UpcomingGameTab />
            </View>
        </View>
    )
}

function PlayerInfoOverviewCard(props) {
    return (
        <View className={`border ${props.initial && "bg-blue-950"} border-blue-500 rounded-xl p-3 ml-4 min-w-[120px]`}>
            <View className="grid items-end">
                <MaterialCommunityIcons name={props.iconName} color={props.color} size={24} />
            </View>
            <View className="mt-8">
                <Text style={{ color: props.color }} className="font-bold text-base">{props.text1}</Text>
                <Text style={{ color: props.color }} className="font-bold text-base">{props.text2}</Text>
            </View>
        </View>
    )
}

function UpcomingGameTab(props) {
    return (
        <View className="border border-blue-500 rounded-xl flex flex-row p-4 space-x-4 mt-4">
            <View className="space-y-3 flex-1">
                <View className="flex flex-row gap-x-2">
                    <MaterialCommunityIcons name="calendar" size={20} color="blue" />
                    <Text className="font-bold">Chelsea Football Club</Text>
                </View>
                <View className="flex flex-row gap-x-2">
                    <MaterialCommunityIcons name="calendar" size={20} color="red" />
                    <Text className="font-bold">Manchester City</Text>
                </View>
            </View>
            <View className="w-[1px] h-full bg-blue-500" />
            <View className="grid justify-center items-end space-y-1">
                <Text>Sun, 02 Feb</Text>
                <Text className="font-bold">10:00 PM</Text>
            </View>
        </View>
    )
}

function PlayerInfoNews(props) {
    return (
        <View className="">
            <Text>PlayerInfoNews</Text>
        </View>
    )
}

function PlayerInfoSeason(props) {
    return (
        <View className="">
            <Text>PlayerInfoSeason</Text>
        </View>
    )
}

function PlayerInfoCareer(props) {
    return (
        <View className="">
            <Text>PlayerInfoCareer</Text>
        </View>
    )
}

function PlayerInfoStats(props) {
    return (
        <View className="">
            <Text>PlayerInfoStats</Text>
        </View>
    )
}