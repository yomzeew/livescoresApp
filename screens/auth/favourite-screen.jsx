import React, { Component } from "react";
import { Text, View, StatusBar, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-paper';

// api call
const leagues = [
    {
        name: "Champions League",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "LaLiga",
        icon: "camera", //to be changed
        selected: true
    },
    {
        name: "Major League Soccer",
        icon: "camera", //to be changed
        selected: true
    },
    {
        name: "Liga Japan",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Premier League",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Europa League",
        icon: "camera", //to be changed
        selected: true
    },
    {
        name: "Serie A",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Copa America",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Bundesliga",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Saudi Pro League",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "League 1",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Man's Fifa World Cup",
        icon: "camera", //to be changed
        selected: true
    },
    {
        name: "Rush League",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Liga Portugal",
        icon: "camera", //to be changed
        selected: false
    },
    {
        name: "Asian Cup",
        icon: "camera", //to be changed
        selected: true
    },
]

const Favourite = ({ navigation }) => {
    return (
        <SafeAreaView className={`justify-center items-center flex-1 ${Platform.OS === "android" ? "w-screen" : "w-full"}`}>
            <StatusBar barStyle="light-content" />
            {/* <View><Text>Tranfer</Text></View>
            <TouchableOpacity onPress={() => navigation.navigate('dashboard')} className=" bg-red-800 w-20 h-20"><Text>Click me</Text></TouchableOpacity>
             */}
            <View className="w-full h-1/6 bg-blue-950 flex flex-row items-center">
                <Button icon="undo" textColor="gray" onPress={() => navigation.navigate('onboarding')}>
                    <Text>Back</Text>
                </Button>
                <View className="">
                    <Text className="text-white text-2xl font-bold">Any more favourites?</Text>
                </View>
            </View>
            <View className="w-full h-5/6 bg-white p-6">
                <View className="gap-4 flex-row flex-wrap">
                    {leagues.map((league) => (
                        <Button
                            key={league.name}
                            className="w-fit"
                            icon={league.icon}
                            mode={league.selected ? "contained" : "outlined"}
                            onPress={() => console.log(league.selected ? "selected" : "not selected" + " should toggle the status")}
                        >
                            {league.name}
                        </Button>
                    ))}
                </View>
                <Button className="bg-blue-950 w-28 absolute bottom-4 right-4" icon="forward" mode="contained" onPress={() => navigation.navigate('dashboard')}>
                    Next
                </Button>
            </View>
        </SafeAreaView>
    );
};
export default Favourite;
