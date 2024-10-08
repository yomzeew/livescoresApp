import React, { Component, useEffect, useState } from "react";
import { Text, View, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Transfers = () => {
    const [category, setCategory] = useState("");
    const [array, setArray] = useState(["", "", "", "", "", "", "", "", ""]);
    const navigation = useNavigation();
    useEffect(() => {
        setCategory("");
    }, []);
    return (
        <SafeAreaView className=" bg-gray-100 h-full w-full">
            <StatusBar barStyle="light-content" />
            <View className="flex space-y-10">
                <View className="flex flex-row py-7 items-center justify-around shadow shadow-zinc-500">
                    <TouchableOpacity
                        onPress={() => {
                            setCategory(category === 'transfers' ? 'all' : 'transfers');
                        }}
                        className={`w-24 h-8 rounded-2xl ${
                            category === "transfers" ? "bg-blue-900" : "border-2 border-blue-900"
                        } flex justify-center items-center`}
                    >
                        <Text className={`${category === "transfers" ? "text-white" : "text-blue-900"} text-xs`}>Tranfers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setCategory(category === 'matches' ? 'all' : 'matches');
                        }}
                        className={`w-24 h-8 rounded-2xl ${
                            category === "matches" ? "bg-blue-900" : "border-2 border-blue-900"
                        } flex justify-center items-center`}
                    >
                        <Text className={`${category === "matches" ? "text-white" : "text-blue-900"} text-xs`}>Matches</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setCategory(category === 'other' ? 'all' : 'other');
                        }}
                        className={`w-24 h-8 rounded-2xl ${
                            category === "other" ? "bg-blue-900" : "border-2 border-blue-900"
                        } flex justify-center items-center`}
                    >
                        <Text className={`${category === "other" ? "text-white" : "text-blue-900"} text-xs`}>Others</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View className="block space-y-3 px-4 mb-24">
                        <View className="flex flex-row justify-between">
                            <Text className="text-lg font-bold">Feeds</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("dashboard");
                                }}
                            ></TouchableOpacity>
                        </View>
                        <View className="flex space-y-5">
                            {array.map((item, index) => (
                                <TouchableOpacity key={index} className="h-40 w-full shadow-md bg-zinc-100 rounded-2xl"></TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
            {/* <View className="flex-1 flex space-y-7">
                <View className="flex items-center">
                    <Text className="text-2xl font-semibold">Transfers</Text>
                </View>
                <View className="flex flex-row justify-evenly px-5 items-center">
                    <TouchableOpacity
                        onPress={() => {
                            setCategory("completed");
                        }}
                        className={`w-36 h-12 rounded-2xl ${
                            category === "completed" ? "bg-blue-900" : "border-2 border-blue-900"
                        } flex justify-center items-center`}
                    >
                        <Text className={`${category === "completed" ? "text-white" : "text-blue-900"}`}>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setCategory("rumors");
                        }}
                        className={`w-36 h-12 rounded-2xl ${
                            category === "rumors" ? "bg-blue-900" : "border-2 border-blue-900"
                        } flex justify-center items-center`}
                    >
                        <Text className={`${category === "rumors" ? "text-white" : "text-blue-900"}`}>Rumours</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View className="flex space-y-5 my-5 items-center w-full">
                        {array.map((item, index) => (
                            <TouchableOpacity key={index} className="h-24 w-11/12 shadow-md flex justify-between flex-row items-center px-3 bg-zinc-100 rounded-2xl">
                                <View className="h-16 w-16 bg-blue-900 rounded-full"></View>
                                <View className='flex items-center'>
                                    <Text className="font-semibold text-lg">M.Rashford</Text>
                                    <Text className="text-base">FC Bayern</Text>
                                </View>
                                <Icon size={30} name={`${index % 2 ? 'lan-pending' : 'check-circle'}`} color={`${index % 2 ? 'rgb(217 119 6)' : 'green'}`} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View> */}
        </SafeAreaView>
    );
};
export default Transfers;
