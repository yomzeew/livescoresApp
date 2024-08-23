import * as Google from "expo-auth-session/providers/google";
import { useState, useEffect } from 'react';
import * as AuthSessionAsync from "expo-auth-session";
import { Platform } from "react-native";
export const AuthSession = (type)=>{
    console.log(type)
    const [useinfo, setUserInfo] = useState([]);
    const [auth, setAuth] = useState();
    const [requireRefresh, setRequireRefresh] = useState(false);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "225393677743-7hmi31naqhceq6no4rek438ohjr9kq39.apps.googleusercontent.com",
        iosClientId: "225393677743-9kg6hq5ttr51nek38vil62s4knvog7fq.apps.googleusercontent.com",
        expoClientId: "225393677743-tqbrcfoko5lkbdo88tqpr1b6ho6brm4q.apps.googleusercontent.com",
    });

    const getUserData = async () => {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        );
        userInfoResponse.json().then((data) => {
            console.log(data);
            setUserInfo(data);
        });
    };

    const getClientId = () => {
        if (Platform.OS === "android") {
            return "225393677743-7hmi31naqhceq6no4rek438ohjr9kq39.apps.googleusercontent.com"
        }
        else if (Platform.OS === "ios") {
            return "225393677743-9kg6hq5ttr51nek38vil62s4knvog7fq.apps.googleusercontent.com.com"
        }
        else {
            console.log('Invalid Platform')
        }
    }

    const refreshToken = async () => {
        const clientId = getClientId();
        console.log(auth);
        const tokenResult = await AuthSessionAsync.refreshAsync(
            {
                clientId: clientId,
                refreshToken: auth.refreshToken,
            },
            {
                tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token",
            }
        );
        tokenResult.refreshToken = auth.refreshToken;
        setAuth(tokenResult)
        setRequireRefresh(false)
    }

    // useEffect(()=> {
    //     const getPersistedAuth
    // })

    const Authenticate = ()=>{
        console.log(response);
        if (response?.type === "success") {
            setAuth(response.authentication);
            const persistAuth = async () => {
                getUserData()         
            }
        }
    }
};