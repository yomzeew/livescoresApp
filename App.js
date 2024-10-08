import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./screens/components/Onboarding";
import Registration from "./screens/components/Registration";
import RegistrationForm from "./screens/components/RegistrationForn";
import EmailVerification from "./screens/components/EmailVerification";
import Dashboard from "./screens/tabs/dashboard";
import Favourite from "./screens/components/favourite-screen";
import Login from "./screens/components/Login";
import Stats from "./screens/components/Stats";
import PlayerInfoPage from "./screens/components/player-info";
import Leagueinfo from "./screens/components/leagueinfo";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="registration-form" component={RegistrationForm} />
        <Stack.Screen
          name="verification-screen"
          component={EmailVerification}
        />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="favourite-screen" component={Favourite} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="stats" component={Stats} />
        <Stack.Screen name="player-info" component={PlayerInfoPage} />
        <Stack.Screen name="leagueinfo" component={Leagueinfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
