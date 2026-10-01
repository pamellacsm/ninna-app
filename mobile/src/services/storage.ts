import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTH_KEY = 'ninna_auth_token';
export const USER_KEY = 'ninna_user';
export const BABY_KEY = 'ninna_baby_profile';
export const RECORDS_KEY = 'ninna_records';
export const PENDING_SYNC_KEY = 'ninna_pending_sync';

export async function saveSession(token: string, user: Record<string, any>) {
  await AsyncStorage.setItem(AUTH_KEY, token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function clearSession() {
  await AsyncStorage.removeItem(AUTH_KEY);
  await AsyncStorage.removeItem(USER_KEY);
  await AsyncStorage.removeItem(BABY_KEY);
  await AsyncStorage.removeItem(RECORDS_KEY);
  await AsyncStorage.removeItem(PENDING_SYNC_KEY);
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

export async function addRecord(record: Record<string, any>) {
  const raw = await AsyncStorage.getItem(RECORDS_KEY);
  const records = raw ? JSON.parse(raw) : [];
  const next = [record, ...records];
  await AsyncStorage.setItem(RECORDS_KEY, JSON.stringify(next));

  const pendingRaw = await AsyncStorage.getItem(PENDING_SYNC_KEY);
  const pending = pendingRaw ? JSON.parse(pendingRaw) : [];
  await AsyncStorage.setItem(PENDING_SYNC_KEY, JSON.stringify([record, ...pending]));

  return record;
}

export async function getRecords() {
  const raw = await AsyncStorage.getItem(RECORDS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function getPendingSyncRecords() {
  const raw = await AsyncStorage.getItem(PENDING_SYNC_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function clearPendingSyncRecords() {
  await AsyncStorage.removeItem(PENDING_SYNC_KEY);
}
