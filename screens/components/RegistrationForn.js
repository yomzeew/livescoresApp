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
const RegistrationForm = () => {
    const [fullname, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasDigit = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const navigation = useNavigation();
    useEffect(() => {
        setIsSecureEntry(true);
        setConfirmPassword('');
        setPassword('');
        setFullName('');
        setErrorMessage('')
    }, []);
    const handleVerification = () => {
        if(!fullname) {
            setErrorMessage('Enter your fullname');
            return
        }
        if(!password) {
            setErrorMessage('Enter your password');
            return
        }
        if(!confirmPassword) {
            setErrorMessage('Confirm your password');
            return
        }
        const verifyPassword = hasDigit.test(password) && hasSpecialChar.test(password) && hasLowerCase.test(password) && hasUpperCase.test(password);
        const validatePasswordLength = password.length;
        if(!verifyPassword) {
            setErrorMessage('Create a strong password e.g LiveScore@2024');
            return;
        }
        if(validatePasswordLength < 8) {
            setErrorMessage('Password must be more than 8 characters');
            return;
        }
        if(confirmPassword !== password) {
            setErrorMessage('Passwords do not match');
            return;
        }
        navigation.navigate("favourite-screen");
    }

    return (
        <View className="h-full w-full flex">
            <SafeAreaView className="flex-1 pt-12 items-center space-y-7">
                <Text className="font-bold text-3xl text-zinc-700">Registration</Text>
                <Text className="text-center px-3">All fields are required</Text>
                <View className="flex space-y-8">
                    <View className="block">
                        <Text>FullName</Text>
                        <TextInput className="border-2 border-slate-300 flex flex-row w-80 h-14 rounded-3xl pl-5 items-center" />
                    </View>
                    <View className="block">
                        <Text>Password</Text>
                        <View className="border-2 border-slate-300 justify-end items-center flex flex-row w-80 h-14 rounded-3xl">
                            <TextInput
                                minLength={8}
                                secureTextEntry={isSecureEntry}
                                className="flex flex-row w-80 h-14 pl-5 items-center"
                            />
                            <TouchableOpacity
                                className="absolute pr-3"
                                onPress={() => {
                                    setIsSecureEntry(isSecureEntry ? false : true);
                                }}
                            >
                                <Icon name={`${isSecureEntry ? "eye" : "eye-slash"}`} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="block">
                        <Text>Confirm Password</Text>
                        <View className="border-2 border-slate-300 justify-end items-center flex flex-row w-80 h-14 rounded-3xl">
                            <TextInput
                                minLength={8}
                                secureTextEntry={isSecureEntry}
                                className="flex flex-row w-80 h-14 pl-5 items-center"
                            />
                            <TouchableOpacity
                                className="absolute pr-3"
                                onPress={() => {
                                    setIsSecureEntry(isSecureEntry ? false : true);
                                }}
                            >
                                <Icon name={`${isSecureEntry ? "eye" : "eye-slash"}`} size={20} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={handleVerification}
                        className="bg-blue-900 flex flex-row w-80 h-14 rounded-3xl justify-center items-center"
                    >
                        <Text className="text-base text-white">Submit</Text>
                    </TouchableOpacity>
                    <View className="flex flex-row items-center justify-center space-x-2">
                        <Text className="text-base">Already Have an Account</Text>
                        <TouchableOpacity onPress={()=> {navigation.navigate('login')}}>
                            <Text className="text-lg underline font-bold">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View className="px-3 absolute bottom-4">
                    <Text className="text-base">By using this app, I agree to the <Text className="text-lg underline font-bold">Terms of Service</Text> and <Text className="text-lg underline font-bold">Privacy Policy</Text></Text>
                </View> */}
            </SafeAreaView>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                className="h-10 w-10 rounded-full bg-blue-900 absolute top-1 left-1 flex justify-center items-center"
            >
                <Icon name="angle-left" color="#fff" size={25} />
            </TouchableOpacity>
        </View>
    );
};

export default RegistrationForm;
