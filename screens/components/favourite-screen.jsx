import React from "react";
import { Text, View, StatusBar, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button, { CustomButton } from "../components/button";
import { leagues } from "../data/favourite-screen";

const Favourite = ({ navigation }) => {
    return (
        <SafeAreaView className={`justify-center items-center flex-1 ${Platform.OS === "android" ? "w-screen" : "w-full"}`}>
            <StatusBar barStyle="light-content" />
            <View className="w-full h-1/6 bg-blue-950 flex flex-row items-center">
                <Button
                    // icon="undo"
                    iconName="keyboard-backspace"
                    color="gray"
                    onPress={() => navigation.navigate('onboarding')}
                    text="Back"
                    className="mr-2"
                />
                <View className="">
                    <Text className="text-white text-2xl font-bold">Any more favourites?</Text>
                </View>
            </View>
            <View className="w-full h-5/6 bg-white p-6">
                <View className="gap-4 flex-row flex-wrap">
                    {leagues.map((league) => (
                        <CustomButton
                            key={league.name}
                            iconName={league.icon}
                            selected={league.selected}
                            text={league.name}
                            color="red"
                            onPress={() => console.log(league.selected ? "selected" + " should toggle the status" : "not selected" + " should toggle the status")}
                        />
                    ))}
                </View>
                <Button
                    className="bg-blue-950 absolute bottom-4 right-4"
                    iconName="forward"
                    color="white"
                    onPress={() => navigation.navigate('dashboard')}
                    text="Next"
                />
            </View>
        </SafeAreaView>
    );
};
export default Favourite;