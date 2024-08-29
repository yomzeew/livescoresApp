import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ActivityIndicator,
    Platform,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Vibration,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { ApiRequests } from "./models/ApiRequests";
import { authMethods } from "../data/auth_methods";
import OTPVerification from "./OtpVerification";
const EmailVerification = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [emailView, setEmailView] = useState(true);
    const [otpView, setOtpView] = useState(false)
    const [errormessage, setErrorMessage] = useState("Verify your email address to continue");
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setEmailView(true);
        setErrorMessage("");
        setEmail("");
        setOtp(["", "", "", "", ""]);
        setIsLoading(false);
    }, []);
    const emailVerification = async () => {
        const verifyEmail = EmailRegex.test(email);
        if (!email) {
            setErrorMessage("Enter email address to continue");
            return false;
        }
        if (!verifyEmail) {
            setErrorMessage("Invalid email address");
            return false;
        } else {
            setIsLoading(true);
            setTimeout(() => {
                setEmailView(false);
                setOtpView(true);
                setErrorMessage("");
            }, 3000);
        }
    };
    const handleVerification = async () => {
        if (emailView) {
            const verification = emailVerification();
            setIsLoading(false);
        } else {
            navigation.navigate("registration-form");
        }
    };
    return (
        <View className="h-full w-full flex">
            <SafeAreaView className="flex-1 flex pt-12 items-center space-y-7">
                <Text className="font-bold text-3xl text-zinc-700">Email Verification</Text>
                <Text className={`text-center px-3 text-red-600`}>{errormessage}</Text>
                <View className="flex space-y-8">
                    {emailView && (
                        <View className="block">
                            <Text>Email</Text>
                            <TextInput
                                onChangeText={(text) => {
                                    setEmail(text);
                                }}
                                className="border-2 border-slate-300 flex flex-row w-80 h-14 rounded-3xl pl-5 items-center"
                            />
                        </View>
                    )}
                    {otpView && (
                        <OTPVerification />
                    )}
                    <TouchableOpacity
                        onPress={handleVerification}
                        className="bg-blue-900 flex flex-row w-80 h-14 rounded-3xl justify-center items-center"
                    >
                        {!isLoading ? <Text className="text-base text-white">Verify</Text> : <ActivityIndicator size={20} color={`#fff`} />}
                    </TouchableOpacity>
                    <View className="flex flex-row items-center justify-center space-x-2">
                        <Text className="text-base">Already Have an Account</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("login");
                            }}
                        >
                            <Text className="text-lg underline font-bold">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    className="h-10 w-10 rounded-full bg-blue-900 absolute top-1 left-1 flex justify-center items-center"
                >
                    <Icon name="angle-left" color="#fff" size={25} />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default EmailVerification;
