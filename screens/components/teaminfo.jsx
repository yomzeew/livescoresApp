import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Teaminfo() {
  return ( 
    <SafeAreaView className="h-full w-screen">
      <ScrollView className="h-full">
        <View className="h-full">
        <View className="h-68 w-screen bg-blue-950">
            <ScrollView
            horizontal={true}
            className="flex flex-row gap-20">
                <Text className="font-bold ml-6 text-white  pt-60  text-xl">News</Text>
                <Text className="font-bold ml-6 text-white  pt-60  text-xl">Seasons</Text>
                <Text className="font-bold ml-6 text-white  pt-60  text-xl">Squad</Text>
                <Text className="font-bold ml-6 text-white  pt-60  text-xl">Transfers</Text>
            </ScrollView>
        

</View>

<View className="h-64 w-auto bg-purple-900 m-3 rounded-3xl">
  <View className="w-64 pr-10 rounded-2xl ml-16 h-7 bg-white"></View>
 
</View>

<View className="h-64 w-auto bg-purple-900 m-3 rounded-3xl">

</View>

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
