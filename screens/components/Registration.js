import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, ActivityIndicator, Alert, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { authMethods } from "../data/auth_methods";
import { signInWithGoogle } from './models/googleAuth';
import { signInWithApple } from './models/appleAuth';
import { signInWithFacebook } from './models/facebookAuth';
const Registration = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigation_test = useNavigation();
    useEffect(() => {
        setIsLoading(false);
    }, []);
    const handleOnboarding = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            //navigation.navigate("registration");
            navigation_test.navigate("verification-screen");
        }, 3000);
    };
    const handleAuthSuccess = (authData) => {
        console.log('Authentication success:', authData);
        // Handle the authentication response, e.g., save tokens, navigate to the next screen, etc.
      };
    
      const handleSignIn = async (provider) => {
        console.log(provider)
        try {
          let authData;
          switch (provider) {
            case 'Google':
              authData = await signInWithGoogle();
              break;
            case 'Apple':
              authData = await signInWithApple();
              break;
            case 'Facebook':
              authData = await signInWithFacebook();
              break;
            default:
              throw new Error('Unknown provider');
          }
          handleAuthSuccess(authData);
        } catch (error) {
          Alert.alert('Authentication Error', error.message);
        }
      };
    return (
        <View className="h-full w-full flex">
            <StatusBar />
            <SafeAreaView className="flex-1 pt-12 items-center space-y-6">
                <Text className="font-bold text-3xl text-zinc-700">Create an Account</Text>
                <Text className="text-center px-3">Create an account to save your teams, clubs and league preferences</Text>
                <View className="flex space-y-8">
                    <View className="flex space-y-6">
                        {authMethods.map((item, index) => (
                            <TouchableOpacity
                                key={item.text}
                                onPress={() => handleSignIn(item.id)}
                                className="border-2 border-slate-300 flex flex-row w-80 h-14 rounded-3xl justify-center items-center space-x-2"
                            >
                                <Image source={item.logo} resizeMode="contain" className="h-8 w-8" />
                                <Text>{item.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View className="flex flex-row items-center space-x-2">
                        <View className="h-[2px] w-36 bg-slate-300"></View>
                        <Text className="text-base">or</Text>
                        <View className="h-[2px] w-36 bg-slate-300"></View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={handleOnboarding}
                            className="border-2 border-slate-300 flex flex-row w-80 h-14 rounded-3xl justify-center items-center space-x-2"
                        >
                            {!isLoading ? (
                                <View className="flex flex-row items-center space-x-2">
                                    <Image
                                        source={require("../../assets/2674096_object_email_web_essential_icon.png")}
                                        resizeMode="contain"
                                        className="h-8 w-8"
                                    />
                                    <Text>Sign up with Email</Text>
                                </View>
                            ) : (
                                <ActivityIndicator color={`#000`} size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row items-center justify-center space-x-2">
                        <Text className="">Already Have an Account</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation_test.navigate("login");
                            }}
                        >
                            <Text className="text-base underline font-bold">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="px-3 absolute bottom-4">
                    <Text className="">
                        By using this app, I agree to the <Text className="text-base underline font-bold">Terms of Service</Text> and{" "}
                        <Text className="text-base underline font-bold">Privacy Policy</Text>
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Registration;
