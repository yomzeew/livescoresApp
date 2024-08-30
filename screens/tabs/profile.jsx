import React, { Component, useState } from "react";
import { Text, View, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import Logo from "../../assets/ldd.png";

const Profile = () => {
<<<<<<< HEAD
    const navigation = useNavigation();
    const getIcon = (name) => {
        switch (name) {
            case "Profile":
                return "account";
                break;
            case "Personalization":
                return "theme-light-dark";
                break;
            case "Help":
                return "help-circle-outline";
                break;
            case "Sign Out":
                return "logout-variant";
                break;
            case "":
                return "dots-vertical";
                break;
            case "Additional Settings":
                return "dots-vertical";
                break;
            default:
                return "";
                break;
        }
    };
    const [array, setArray] = useState(["Profile", "Personalization", "Additional Settings", "Help", "Sign Out"]);
    return (
        <SafeAreaView className="h-full w-full flex">
            <StatusBar barStyle="light-content" />
            <View>
                <View className="flex shadow w-full flex-row h-20 justify-between items-center px-4">
                    <Text className="text-2xl">Settings</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="magnify" size={30} />
                    </TouchableOpacity>
                </View>
                <View className="">
                    <View className="flex">
                        {array.map((item, index) => (
                            <TouchableOpacity key={index} className="h-20 items-center w-full px-4 bg-zinc-100 flex flex-row space-x-5 rounded-2xl">
                                <MaterialCommunityIcons color={`${item === 'Sign Out' ? 'red' : 'black'}`} name={getIcon(item)} size={25} />
                                <Text className={`${item === 'Sign Out' ? 'text-red-600' : 'text-black'} text-lg`}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Profile;
