import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/tabs/dashboard";
import Favourite from "./screens/auth/favourite-screen";
import Leagueinfo from "./screens/leagueinfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="favourite-screen">
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
          name="leagueinfo"
          component={Leagueinfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
