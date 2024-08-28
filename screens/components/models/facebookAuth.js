import * as Facebook from 'expo-auth-session/providers/facebook';

export async function signInWithFacebook() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '<Your-Facebook-Client-ID>',
  });

  const result = await promptAsync();
  if (result.type === 'success') {
    return result.authentication;
  } else {
    throw new Error('Facebook Sign-In failed');
  }
}