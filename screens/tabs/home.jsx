import React, { Component } from "react";
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
import Logo from "../../assets/ldd.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className=" bg-gray">
      <StatusBar barStyle="light-content" />
      <View className="  w-full h-13 flex-row items-center justify-between px-1 pt-2 bg-white">
        <View className=" w-36 h-12 flex justify-center items-center -mt-5">
          <Image source={Logo} className=" h-32 w-32 -ml-6" />
        </View>
        <View className=" w-32 h-12  flex-row justify-between items-center pr-3">
          <TouchableOpacity>
            <MaterialCommunityIcons name="magnify" color="black" size={23} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="library-shelves"
              color="black"
              size={23}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="black"
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" mt-3">
        <View className=" w-full pl-4 mt-3">
          <Text className=" text-xl font-bold ">Your Team</Text>
        </View>
        <View className=" w-screen mt-3 h-56 flex justify-center items-center">
          <TouchableOpacity className=" bg-blue-800 w-[90%] h-52 rounded-2xl ">
            <View className="  w-full h-10 flex-row  justify-between p-2">
              <View>
                <Text className=" text-white">League Logo</Text>
              </View>
              <View>
                <Text className=" text-white">Match day 2</Text>
              </View>
            </View>
            <View className=" w-full h-40  flex-row justify-between items-center px-6">
              <View>
                <TouchableOpacity className="">
                  <Avatar.Image size={55} source={Logo} />
                </TouchableOpacity>
                <View className=" mt-2">
                  <Text className=" text-center font-bold text-white text-base">
                    Team A 
                  </Text>
                  <Text className=" text-center">Home</Text>
                </View>
              </View>
              <View className="  w-20 h-14 flex justify-center items-center">
                <Text className=" text-white text-xl font-bold">11:13:47</Text>
                <Text className=" text-gray-300">9:20pm</Text>
              </View>
              <View>
                <TouchableOpacity className="">
                  <Avatar.Image size={55} source={Logo} />
                </TouchableOpacity>
                <View className=" mt-2">
                  <Text className=" text-center text-white text-base font-bold">
                    Team B
                  </Text>
                  <Text className=" text-center">Away</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className=" mt-5 flex w-full  items-center justify-center">
        <View className=" w-full pl-4 mt-3">
          <Text className=" text-lg font-bold ">Favourites</Text>
        </View>
        <View className=" h-40 w-[90%] mt-7  flex-row justify-between">
          <TouchableOpacity className=" w-12 rounded-full h-12 bg-white border-gray-300 border"></TouchableOpacity>
          <TouchableOpacity className=" w-12 rounded-full h-12 bg-white border-gray-300 border"></TouchableOpacity>
          <TouchableOpacity className=" w-12 rounded-full h-12 bg-white border-gray-300 border"></TouchableOpacity>
          <TouchableOpacity className=" w-12 rounded-full h-12 bg-white border-gray-300 border"></TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-blue-900 border-gray-300 border rounded-full justify-center items-center">
            <MaterialCommunityIcons name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
