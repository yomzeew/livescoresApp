import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Transfers = () => {
  return (
    <SafeAreaView className=" bg-gray justify-center items-center flex-1">
    <StatusBar barStyle="light-content" />
    <View><Text>Tranfer</Text></View>
     
  </SafeAreaView>
  );
};
export default Transfers ;
