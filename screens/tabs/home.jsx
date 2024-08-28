import React, { Component } from "react";
import { Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/ldd.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { useState } from "react";

const Home = ({ navigation }) => {
    const [array, setArray] = useState(["", "", "", "", "", "", "", "", ""]);
    return (
        <SafeAreaView className=" bg-gray flex h-full w-full">
            <StatusBar barStyle="light-content" />
            <View className="  w-full h-13 flex-row items-center justify-between px-1 pt-2 bg-white">
                <View className=" w-36 h-12 flex justify-center items-center -mt-5">
                    <Image source={Logo} className=" h-32 w-32 -ml-6" />
                </View>
                <View className=" w-32 h-12  flex-row justify-between items-center pr-3">
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="magnify" color="black" size={23} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="calendar-outline" color="black" size={23} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-vertical" color="black" size={23} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className="flex-1">
                <View className="mt-3">
                    <View className=" w-full ">
                        <Text className="text-xl font-bold pl-4">Your Team</Text>
                    </View>
                    <View className="w-screen mt-3 h-56 flex justify-center items-center">
                        <TouchableOpacity className=" bg-blue-800 w-[90%] h-52 rounded-2xl ">
                            <View className="w-full h-10 flex-row  justify-between">
                                <View>
                                    <Image source={Logo} className="w-32 h-8" />
                                </View>
                                <View className="p-2">
                                    <Text className=" text-white">Match day 2</Text>
                                </View>
                            </View>
                            <View className=" w-full h-36  flex-row justify-between items-center px-6">
                                <View>
                                    <TouchableOpacity className="">
                                        <Avatar.Image size={55} source={Logo} />
                                    </TouchableOpacity>
                                    <View className=" mt-2">
                                        <Text className=" text-center font-bold text-white text-base">Team A</Text>
                                        <Text className=" text-center">Home</Text>
                                    </View>
                                </View>
                                <View className="  w-20 h-14 flex justify-center items-center">
                                    <Text className=" text-white text-xl font-bold">11:13:47</Text>
                                    <Text className=" text-gray-300">9:20pm</Text>
                                </View>
                                <View>
                                    <TouchableOpacity className="">
                                        <Avatar.Image size={55} source={Logo} />
                                    </TouchableOpacity>
                                    <View className=" mt-2">
                                        <Text className=" text-center text-white text-base font-bold">Team B</Text>
                                        <Text className=" text-center">Away</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className=" mt-3 flex w-full items-center justify-center">
                    <View className=" w-full">
                        <Text className=" text-lg font-bold pl-4">Favorites</Text>
                    </View>
                    <View className="w-[90%] mt-4  flex-row justify-between">
                        <TouchableOpacity className="flex items-center space-y-1">
                            <View className="h-12 w-12 bg-blue-900 rounded-full"></View>
                            <Text className="text-sm">Laliga</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex items-center space-y-1">
                            <View className="h-12 w-12 bg-blue-900 rounded-full"></View>
                            <Text className="text-sm">Laliga</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex items-center space-y-1">
                            <View className="h-12 w-12 bg-blue-900 rounded-full"></View>
                            <Text className="text-sm">Laliga</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex items-center space-y-1">
                            <View className="h-12 w-12 bg-blue-900 rounded-full"></View>
                            <Text className="text-sm">Laliga</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex items-center space-y-1">
                            <View className="h-12 w-12 bg-blue-900 rounded-full flex justify-center items-center">
                                <MaterialCommunityIcons name="plus" color={`#fff`} size={25} />
                            </View>
                            <Text className="text-sm">Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="mt-3 block space-y-3 px-4 mb-4">
                    <Text className="text-lg font-bold">News</Text>
                    <View className="flex space-y-5">
                        {array.map((item, index) => (
                            <TouchableOpacity key={index} className="h-40 w-full shadow-md bg-zinc-100 rounded-2xl"></TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Home;
