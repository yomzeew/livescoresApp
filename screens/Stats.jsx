import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Stats() {
  return ( 
    <SafeAreaView>
      <ScrollView>
        <Text className="font-bold text-2xl ml-3 mb-2">Top Scorer</Text>
      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <TouchableOpacity>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-5"></View>
      </TouchableOpacity>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Lionel Messi</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-20"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2"></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-5"></View>
      <Text className=" text-2xl font-light text-[#03054B] pl-10">Kylain Mbappe</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-14"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <View>
        <Text className="font-bold text-2xl ml-3 mt-8">Assists</Text>
      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
        <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-2xl font-light text-[#03054B] pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>
      </View>

      <View>
      <Text className="font-bold text-2xl ml-3 mt-8">Goals + Assists</Text>
      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-2xl font-light text-[#03054B] pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity className=" mt-10 flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className="text-2xl font-light  text-[#03054B] pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity className=" mt-10 flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-2xl font-light  text-[#03054B] pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity className=" mt-10 flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className="text-2xl font-light text-[#03054B] pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity className=" mt-10 flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-5"></View>
      <Text className="text-2xl font-light text-[#03054B] pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>
      </View>

       <View>
      <TouchableOpacity className=" mt-10 flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#FFFFFF]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className="text-2xl font-light text-[#03054B] pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-red-500 rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>

      <TouchableOpacity className=" flex flex-row  items-center h-10 w-full bg-[#E4E4EA]">
      <View className="w-8 h-8 bg-red-500 rounded-full ml-5"></View>
      <Text className=" text-[#03054B] text-2xl font-light pl-10">Julian Alvarez</Text>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-16"></View>
      <View className="w-8 h-8 bg-[#03054B] rounded-full ml-2 "></View>
      <StatusBar style="auto" />
      </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
