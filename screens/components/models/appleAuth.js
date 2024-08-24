import * as AppleAuthentication from 'expo-apple-authentication';

export async function signInWithApple() {
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });
    return credential;
  } catch (e) {
    if (e.code === 'ERR_CANCELED') {
      // Handle cancel case
      throw new Error('Apple Sign-In canceled');
    } else {
      throw new Error('Apple Sign-In failed');
    }
  }
}