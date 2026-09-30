import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTH_KEY = 'ninna_auth_token';
export const USER_KEY = 'ninna_user';
export const BABY_KEY = 'ninna_baby_profile';

export async function saveSession(token: string, user: Record<string, any>) {
  await AsyncStorage.setItem(AUTH_KEY, token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function clearSession() {
  await AsyncStorage.removeItem(AUTH_KEY);
  await AsyncStorage.removeItem(USER_KEY);
  await AsyncStorage.removeItem(BABY_KEY);
}

export async function getStoredToken() {
  return AsyncStorage.getItem(AUTH_KEY);
}

export async function getStoredUser() {
  const raw = await AsyncStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function getStoredBaby() {
  const raw = await AsyncStorage.getItem(BABY_KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function saveBaby(baby: Record<string, any>) {
  await AsyncStorage.setItem(BABY_KEY, JSON.stringify(baby));
}
