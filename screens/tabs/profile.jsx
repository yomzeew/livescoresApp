import React, { Component } from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Avatar} from "react-native-paper";
import Logo from "../../assets/ldd.png";

const Profile = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="  flex-1">
      <StatusBar barStyle="light-content" />
      <View className=" w-full h-12 bg-white flex justify-center items-center ">
        <View className="  w-[90%] flex-row justify-between  h-12">
          <View>
            <Text className=" text-2xl text-black mb-auto mt-auto">
              Profile
            </Text>
          </View>
          <TouchableOpacity className=" mb-auto mt-auto">
            <MaterialCommunityIcons name="magnify" color="black" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" w-full mt-4 flex justify-center items-center">
        <View className=" w-[92%] h-44 bg-white flex-row rounded-2xl">
          <View className=" w-[27%] h-full flex items-center justify-center -mt-8">
            <TouchableOpacity className="">
              <Avatar.Image
                size={60}
                source={Logo}
              />
            </TouchableOpacity>
          </View>
          <View className="  w-[72%] h-full pt-3">
            <Text className=" text-center font-bold text-sm pr-1 ">
              Your sports journey begins here
            </Text>
            <View className=" w-full  mt-1">
              <Text className=" text-left pl-4 text-xs leading-4">
                Sign in to synce your favourites,track predictions,contribute to
                your team,and more
              </Text>
            </View>
            <View className=" mt-5">
              <TouchableOpacity onPress={()=> {navigation.navigate('login')}} className=" bg-[#e8def7] h-10 w-24 ml-auto mr-9 rounded-3xl flex justify-center">
                <Text className=" text-center">SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className=" w-full mt-2 flex justify-center items-center">
        <View className=" w-[92%] h-96 bg-white py-8 rounded-2xl">
          <TouchableOpacity className=" w-full  h-10 flex-row space-x-10 mb-4">
            <View className="mb-auto mt-auto pl-5">
              <MaterialCommunityIcons
                name="account-circle-outline"
                color="black"
                size={35}
              />
            </View>
            <View>
              <Text className=" mb-auto mt-auto">fsdjbsdjnsdksdfklddd</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className=" w-full  h-10 flex-row space-x-10 mb-4">
            <View className="mb-auto mt-auto pl-5">
              <MaterialCommunityIcons
                name="account-circle-outline"
                color="black"
                size={35}
              />
            </View>
            <View>
              <Text className=" mb-auto mt-auto">fsdjbsdjnsdksdfklddd</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className=" w-full  h-10 flex-row space-x-10 mb-4">
            <View className="mb-auto mt-auto pl-5">
              <MaterialCommunityIcons
                name="account-circle-outline"
                color="black"
                size={35}
              />
            </View>
            <View>
              <Text className=" mb-auto mt-auto">fsdjbsdjnsdksdfklddd</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className=" w-full  h-10 flex-row space-x-10 mb-4">
            <View className="mb-auto mt-auto pl-5">
              <MaterialCommunityIcons
                name="account-circle-outline"
                color="black"
                size={35}
              />
            </View>
            <View>
              <Text className=" mb-auto mt-auto">fsdjbsdjnsdksdfklddd</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className=" w-full  h-10 flex-row space-x-10 mb-4">
            <View className="mb-auto mt-auto pl-5">
              <MaterialCommunityIcons
                name="account-circle-outline"
                color="black"
                size={35}
              />
            </View>
            <View>
              <Text className=" mb-auto mt-auto">fsdjbsdjnsdksdfklddd</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className=" w-full  h-10 flex-row space-x-10 mb-4">
            <View className="mb-auto mt-auto pl-5">
              <MaterialCommunityIcons
                name="account-circle-outline"
                color="black"
                size={35}
              />
            </View>
            <View>
              <Text className=" mb-auto mt-auto">fsdjbsdjnsdksdfklddd</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
