import React, { Component } from "react";
import { Text, View, StatusBar, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-paper';

const Favourite = ({ navigation }) => {
    return (
        <SafeAreaView className={`justify-center items-center flex-1 ${Platform.OS === "android" ? "w-screen" : "w-full"}`}>
            <StatusBar barStyle="light-content" />
            {/* <View><Text>Tranfer</Text></View>
            <TouchableOpacity onPress={() => navigation.navigate('dashboard')} className=" bg-red-800 w-20 h-20"><Text>Click me</Text></TouchableOpacity>
             */}
            <View className="w-full h-1/6 bg-blue-950 flex flex-row items-center">
                <Button icon="undo" textColor="gray" onPress={() => console.log("back to authentication")}>
                    <Text>Back</Text>
                </Button>
                <View className="">
                    <Text className="text-white text-2xl font-bold">Any more favourites?</Text>
                </View>
            </View>
            <View className="w-full h-5/6 bg-white">
                <Button className="w-28" icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
                <Button className="bg-blue-950 w-28 absolute bottom-4 right-4" icon="forward" mode="contained" onPress={() => navigation.navigate('dashboard')}>
                    Next
                </Button>
            </View>
        </SafeAreaView>
    );
};
export default Favourite;
