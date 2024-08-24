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
import OTPInput from "./OtpInput";
import { ApiRequests } from "./models/ApiRequests";
const EmailVerification = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [emailView, setEmailView] = useState(true);
    const [otpView, setOtpView] = useState(false);
    const [errormessage, setErrorMessage] = useState("Verify your email address to continue");
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setEmailView(true);
        setErrorMessage("");
        setOtpView(false);
        setIsLoading(false)
    }, []);
    const emailVerification = async () => {
        const verifyEmail = EmailRegex.test(email);
        if(!email) {
            setErrorMessage('Enter email address to continue')
            return false;
        }
        if(!verifyEmail) {
            setErrorMessage('Invalid email address');
            return false;
        }
    };
    const handleVerification = async () => {
        if (emailView) {
            setIsLoading(true);
            //const request = await ApiRequests('verifyEmail',{ email: email });
            const request = emailVerification()
            if(!request) {
                setIsLoading(false);
                setEmail('');
                setErrorMessage('Verification failed');
                setOtpView(false);
                setEmailView(true)
                return
            }
            else {
                setIsLoading(false);
                setEmailView(false);
                setOtpView(true)
                setErrorMessage('An OTP has been sent to the submitted email'); 
            }
        } else {
            navigation.navigate("registration-form");
        }
    };
    return (
        <View className="h-full w-full flex">
            <SafeAreaView className="flex-1 pt-12 items-center space-y-7">
                <Text className="font-bold text-3xl text-zinc-700">Email Verification</Text>
                <Text className={`text-center px-3 text-red-600`}>{errormessage}</Text>
                <View className="flex space-y-8">
                    {emailView && (
                        <View className="block">
                            <Text>Email</Text>
                            <TextInput
                                // onFocus={()=>{setMessage('Verify your email address to continue')}}
                                onChangeText={(text) => {
                                    setEmail(text);
                                }}
                                className="border-2 border-slate-300 flex flex-row w-80 h-14 rounded-3xl pl-5 items-center"
                            />
                        </View>
                    )}
                    {otpView && (
                        <View className="block">
                            <Text>Otp</Text>
                            <OTPInput />
                        </View>
                    )}
                    <TouchableOpacity
                        onPress={handleVerification}
                        className="bg-blue-900 flex flex-row w-80 h-14 rounded-3xl justify-center items-center"
                    >
                        {!isLoading ? <Text className="text-base text-white">Verify</Text> : <ActivityIndicator size={20} color={`#fff`} />}
                    </TouchableOpacity>
                    <View className="flex flex-row items-center justify-center space-x-2">
                        <Text className="text-base">Already Have an Account</Text>
                        <TouchableOpacity>
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

export default EmailVerification;