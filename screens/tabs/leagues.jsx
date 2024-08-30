import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/ldd.png";
import { Avatar, List, Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { CountryList } from "../data/countries";

// Create a custom theme
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",  // Override the background color
    surface: "white",      // Override the surface color
    primary: "blue",       // Example: Change the primary color
    accent: "red",         // Example: Change the accent color
    text: "black",         // Override text color if needed
    // Add other color overrides as needed
  },
};

const Leagues = ({ navigation }) => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <SafeAreaView className="h-full w-full flex bg-white">
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View className="w-full flex-row space-x-5 h-36 pl-3">
          <TouchableOpacity className="bg-white w-24 h-28 border-1 border-gray-300 rounded-2xl mt-auto mb-auto flex justify-center items-center">
            <View>
              <Avatar.Image size={45} source={Logo} className="mb-2" />
              <Text className="text-center font-medium text-sm">UEFA</Text>
              <Text className="text-center font-medium text-sm">Ranking</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white w-24 h-28 border-1 border-gray-300 rounded-2xl mt-auto mb-auto flex justify-center items-center">
            <View>
              <Avatar.Image size={45} source={Logo} className="mb-2" />
              <Text className="text-center font-medium text-sm">FIFA</Text>
              <Text className="text-center font-medium text-sm">Ranking</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <Text className="font-bold pl-4 text-base">
            International Categories
          </Text>
          <List.Section className="px-2 flex space-y-4">
            {CountryList.map((item, index) => (
              <List.Accordion
                title={item.name}
                expanded={expanded === index}
                key={index}
                onPress={() => handlePress(index)}
                className="bg-white rounded-2xl border-2 border-gray-300"
                left={(props) => <Text {...props}>{item.emoji}</Text>}
              >
                <TouchableOpacity onPress={() => navigation.navigate("leagueinfo")}>
                  <List.Item
                    title="Item 1"
                    className="-ml-10"
                    left={(props) => <List.Icon {...props} icon="file" />}
                    onPress={() => navigation.navigate("stats")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <List.Item
                    title="Item 2"
                    className="-ml-10"
                    left={(props) => <List.Icon {...props} icon="file" />}
                  />
                </TouchableOpacity>
              </List.Accordion>
            ))}
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <Leagues />
    </PaperProvider>
  );
}
