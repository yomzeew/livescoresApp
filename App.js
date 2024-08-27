import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/tabs/dashboard";
import Favourite from "./screens/auth/favourite-screen";
import Teaminfo from "./screens/teaminfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="teaminfo">
        <Stack.Screen
          name="favourite-screen"
          component={Favourite}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="teaminfo"
          component={Teaminfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
