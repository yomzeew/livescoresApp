import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from './screens/components/Onboarding';
import Registration from './screens/components/Registration';
import RegistrationForm from "./screens/components/RegistrationForn";
import EmailVerification from "./screens/components/EmailVerification";
import Dashboard from "./screens/tabs/dashboard";
import Favourite from "./screens/auth/favourite-screen";
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                initialRouteName: "onboarding"
            }}>
                <Stack.Screen name="onboarding" component={Onboarding} />
                <Stack.Screen name="registration" component={Registration} />
                <Stack.Screen name="registration-form" component={RegistrationForm} />
                <Stack.Screen name="verification-screen" component={EmailVerification} />
                <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }}/>
                <Stack.Screen name="favourite-screen" component={Favourite} options={{ headerShown: false }}/>
            </Stack.Navigator>          
        </NavigationContainer>
    );
};