import React, { Component, useState } from "react";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { List, useTheme } from "react-native-paper";

const Leagues = () => {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(null);

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <SafeAreaView className="  flex-1">
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View className="  w-full flex-row space-x-5 h-36 pl-3">
          <TouchableOpacity className=" bg-white w-24 h-28  border-1 border-gray-300  rounded-2xl mt-auto mb-auto flex justify-center items-center">
            <View className="">
              <Avatar.Image size={45} source={Logo} className=" mb-2" />
              <Text className=" text-center font-medium text-sm">UEFA</Text>
              <Text className=" text-center  font-medium text-sm">Ranking</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-white w-24 h-28  border-1 border-gray-300 rounded-2xl mt-auto mb-auto flex justify-center items-center">
            <View className="">
              <Avatar.Image size={45} source={Logo} className=" mb-2" />
              <Text className=" text-center font-medium text-sm">FIFA</Text>
              <Text className=" text-center  font-medium text-sm">Ranking</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className=" mt-4">
          <Text className=" font-bold pl-4 text-base">
            International Categories
          </Text>
          <List.Section className=" px-2">
            <List.Accordion
              title="Section 1"
              expanded={expanded === 0}
              onPress={() => handlePress(0)}
              className=" bg-white rounded-2xl border-1 border-gray-300 mt-2"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <TouchableOpacity>
                <List.Item
                  title="Item 1"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <List.Item
                  title="Item 2"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
            </List.Accordion>
            <List.Accordion
              title="Section 2"
              expanded={expanded === 1}
              onPress={() => handlePress(1)}
              className=" bg-white rounded-2xl border-1 border-gray-300 mt-2"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <TouchableOpacity>
                <List.Item
                  title="Item 1"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <List.Item
                  title="Item 2"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
            </List.Accordion>
            <List.Accordion
              title="Section 3"
              expanded={expanded === 2}
              onPress={() => handlePress(2)}
              className=" bg-white rounded-2xl border-1 border-gray-300 mt-2"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <TouchableOpacity>
                <List.Item
                  title="Item 1"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <List.Item
                  title="Item 2"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
            </List.Accordion>
            <List.Accordion
              title="Section 3"
              expanded={expanded === 3}
              onPress={() => handlePress(3)}
              className=" bg-white rounded-2xl border-1 border-gray-300 mt-2"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <TouchableOpacity>
                <List.Item
                  title="Item 1"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <List.Item
                  title="Item 2"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
            </List.Accordion>
            <List.Accordion
              title="Section 3"
              expanded={expanded === 4}
              onPress={() => handlePress(4)}
              className=" bg-white rounded-2xl border-1 border-gray-300 mt-2"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <TouchableOpacity>
                <List.Item
                  title="Item 1"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <List.Item
                  title="Item 2"
                  className=" -ml-10"
                  left={(props) => <List.Icon {...props} icon="file" />}
                />
              </TouchableOpacity>
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Leagues;
