import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const getIconName = (routeName) => {
  switch (routeName) {
    case "Home":
      return "home-outline";
    case "leagues":
      return "trophy";
    case "transfers":
      return "currency-gbp";
    case "profile":
      return "account-outline";
  }
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View className=" flex-row  h-20 bg-white items-center justify-around border-t border-gray-300">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            className=" flex-1 items-center justify-center"
          >
            <MaterialCommunityIcons
              name={getIconName(route.name)}
              size={25}
              color={isFocused ? "blue" : "gray"}
            />
            <Text
              style={{ color: isFocused ? "blue" : "gray" }}
              className=" mt-2"
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
