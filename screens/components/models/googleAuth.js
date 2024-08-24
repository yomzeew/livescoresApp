import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

export async function signInWithGoogle() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '225393677743-tqbrcf0k05lkbdo88tqpr1b6ho6brm4q.apps.googleusercontent.com',
    iosClientId: '225393677743-9kg6hq5ttr51nek38vil62s4knvog7fq.apps.googleusercontent.com',
    androidClientId: '225393677743-7hmi31naqhceq6no4rek438ohjr9kq39.apps.googleusercontent.com',
    // webClientId: '<Your-Web-Client-ID>',
    scopes: ['profile', 'email'],
  });

  const result = await promptAsync()
  if (result.type === 'success') {
    return result.authentication;
  } else {
    throw new Error('Google Sign-In failed');
  }
}