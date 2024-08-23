import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ActivityIndicator,
    ImageBackground,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { ApiRequests } from "./models/ApiRequests";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasDigit = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const navigation = useNavigation();
    useEffect(() => {
        setErrorMessage("Login to continue using your Account");
        setIsSecureEntry(true);
    }, []);
    const handleLoginVerification = () => {
        if (!email) {
            setErrorMessage("Enter your Email address to continue");
            return;
        }
        if (!password) {
            setErrorMessage("Enter your password to continue");
            return;
        }
        if (!EmailRegex.test(email)) {
            setErrorMessage("Enter a valid email address");
            return;
        }
        if (password.length < 8) {
            setErrorMessage("Invalid password");
            return;
        }
        if (!hasDigit.test(password) || !hasLowerCase.test(password) || !hasUpperCase.test(password) || !hasSpecialChar.test(password)) {
            setErrorMessage("Invalid password");
            return;
        } else {
            const data = {
                email: email,
                password: password,
            };
            //const request = await ApiRequests('verifyEmail',{ email: email });
            const request = "test";
        }
    };
    return (
        <View className="h-full w-full flex">
            <SafeAreaView className="flex-1 pt-12 items-center space-y-7">
                <Text className="font-bold text-3xl text-zinc-700">Login</Text>
                <Text className="text-center px-3 text-red-600">{errorMessage}</Text>
                <View className="flex space-y-8">
                    <View className="block">
                        <Text>Email</Text>
                        <TextInput
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            className="border-2 border-slate-300 flex flex-row w-80 h-14 rounded-3xl pl-5 items-center"
                        />
                    </View>
                    <View className="block">
                        <Text>Password</Text>
                        <View className="border-2 border-slate-300 justify-end items-center flex flex-row w-80 h-14 rounded-3xl">
                            <TextInput
                                onChangeText={(text) => {
                                    setPassword(text);
                                }}
                                minLength={8}
                                secureTextEntry={isSecureEntry}
                                className="flex flex-row w-80 h-14 pl-5 items-center"
                            />
                            <TouchableOpacity
                                className="absolute pr-3"
                                onPress={() => {
                                    setIsSecureEntry(isSecureEntry === "true" ? false : true);
                                }}
                            >
                                <Icon name={`${isSecureEntry ? "eye" : "eye-slash"}`} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("dashboard");
                        }}
                        className="bg-blue-900 flex flex-row w-80 h-14 rounded-3xl justify-center items-center"
                    >
                        <Text className="text-base text-white">Submit</Text>
                    </TouchableOpacity>
                    <View className="flex flex-row items-center justify-center space-x-2">
                        <Text className="text-base">Don't Have an Account</Text>
                        <TouchableOpacity onPress={handleLoginVerification}>
                            <Text className="text-lg underline font-bold">Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View className="px-3 absolute bottom-4">
                    <Text className="text-base">By using this app, I agree to the <Text className="text-lg underline font-bold">Terms of Service</Text> and <Text className="text-lg underline font-bold">Privacy Policy</Text></Text>
                </View> */}
            </SafeAreaView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("onboarding");
                }}
                className="h-10 w-10 rounded-full bg-blue-900 absolute top-1 left-1 flex justify-center items-center"
            >
                <Icon name="angle-left" color="#fff" size={25} />
            </TouchableOpacity>
        </View>
    );
};

export default Login;
