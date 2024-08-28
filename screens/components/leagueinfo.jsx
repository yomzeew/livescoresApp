import React, { Component, useState } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

const Leagueinfo = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <SafeAreaView className=" bg-gray">
      <StatusBar barStyle="light-content" />
      <View className="w-screen h-40 bg-black">
        <View className=" w-full h-12">
          <TouchableOpacity onPress={() => navigation.goBack()} className="pt-2 pl-2">
            <MaterialCommunityIcons name="arrow-left" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Text className=" font-bold text-white text-2xl text-center">Premier Leauge</Text>
        </View>
        <ScrollView
          horizontal={true}
          className="flex flex-row gap-8">
          <TouchableOpacity onPress={() => setCurrentPage("details")} >
            <Text className=" font-bold text-white pt-14 text-xl">Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPage("matches")} >
            <Text className="font-bold text-white pt-14 text-xl">Matches</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPage("tournament")} >
            <Text className="font-bold text-white pt-14 text-xl">Tournament</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPage("league")}  >
            <Text className="font-bold text-white pt-14 text-xl">League</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPage("info")}>
            <Text className="font-bold text-white pt-14 text-xl">Info</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPage("bench")} >
            <Text className="font-bold text-white pt-14 text-xl">Bench</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {currentPage === "" && (
        <View>
          <Text className="font-bold text-xl">Default page</Text>
        </View>
      )}
      {currentPage === "details" && (
        <View>
          <Text className="font-bold text-xl">Premier Leauge</Text>
        </View>
      )}
      {currentPage === "matches" && (
        <View>
          <Text className="font-bold text-xl">Matches</Text>
        </View>
      )}
       {currentPage === "tournament" && (
        <View>
          <Text className="font-bold text-xl">Emmanuel</Text>
        </View>
      )}
       {currentPage === "league" && (
        <View>
          <Text className="font-bold text-xl">Desmond</Text>
        </View>
      )}
       {currentPage === "info" && (
        <View>
          <Text className="font-bold text-xl">Oyemekun</Text>
        </View>
      )}
      {currentPage === "bench" && (
        <View>
          <Text className="font-bold text-xl">Miche smar,jhykghfy</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Leagueinfo;
