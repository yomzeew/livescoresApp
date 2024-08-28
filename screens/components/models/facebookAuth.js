import * as Facebook from 'expo-auth-session/providers/facebook';
import { useState } from 'react';
const appId = ""
const setupFacebookAuthRequest = () => {
  const handleAuth = Facebook.useAuthRequest({
    appId,
    permissions: ['public_profile', 'email'],
  });
  const [request, response, promptAsync] = useState(handleAuth)
  return { request, response, promptAsync };
};

export async function signInWithFacebook() {
  const { promptAsync } = setupFacebookAuthRequest();
  const result = await promptAsync();
  
  if (result.type === 'success') {
    return result.authentication;
  } else {
    throw new Error(`Facebook Sign-In failed: ${result.error}`);
  }
}