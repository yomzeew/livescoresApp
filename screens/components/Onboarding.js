import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, ActivityIndicator, ImageBackground, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Onboarding = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigation_test = useNavigation();
    useEffect(()=>{
        setIsLoading(false);
    },[])
    const handleOnboarding = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            //navigation.navigate("registration");
            navigation_test.navigate("registration");
        }, 3000);
    };
    return (
        <View className="bg-blue-900 h-full w-full flex">
            <StatusBar />
            <SafeAreaView className="flex-1">
                <View className="mt-20 flex items-center space-y-7">
                    <Text className="text-white text-center text-4xl px-5 font-bold">Get your live scores update in our app</Text>
                    <Text className="text-white text-center px-9 text-base">Never miss a beat, live scores or breaking news</Text>
                    <TouchableOpacity onPress={handleOnboarding} className="w-52 border-2 border-blue-400 rounded-3xl h-14 flex justify-center items-center bg-blue-800"><Text className="text-white text-base">Create Account</Text></TouchableOpacity>
                    {isLoading && <ActivityIndicator color={`#fff`} size={25} />}
                </View>
                {/* {isLoading && <ActivityIndicator color={`#fff`} size={25} />} */}
                <View className="flex justify-end h-80 w-96 items-center absolute bottom-0">
                    <Image
                        source={require("../../assets/Fernandez_enzo_profile_2024-25_avatar-removebg.png")}
                        resizeMode="contain"
                        className="h-full"
                    />
                    {/* <Image
                        source={require("../assets/CUCURELLA_Marc_profile_2024-25_avatar-removebg.png")}
                        resizeMode="contain"
                        className="h-full w-[50%]"
                    /> */}
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Onboarding;
