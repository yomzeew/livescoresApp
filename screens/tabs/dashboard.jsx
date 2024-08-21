import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./home";
import CustomTabBar from "../components/custombottomtab";
import Leagues from "./leagues";
import Transfers from "./transfers";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline"; // Changed icon name
          } else if (route.name === "leagues") {
            iconName = "trophy-award"; // Changed icon name
          } else if (route.name === "profile") {
            iconName = "account"; // Changed icon name
          } else if (route.name === "transfers") {
            iconName = "exchange"; // Changed icon name
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="leagues"
        component={Leagues}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="transfers"
        component={Transfers}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
