import AsyncStorage from '@react-native-async-storage/async-storage';
import { BabyProfile, RoutineRecord } from '../types/records';

const STORAGE_KEYS = {
  baby: 'ninna_baby_profile',
  records: 'ninna_records',
};

export async function getBabyProfile(): Promise<BabyProfile | null> {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.baby);
  return raw ? (JSON.parse(raw) as BabyProfile) : null;
}

export async function saveBabyProfile(profile: BabyProfile) {
  await AsyncStorage.setItem(STORAGE_KEYS.baby, JSON.stringify(profile));
}

export async function getRecords(): Promise<RoutineRecord[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.records);
  return raw ? (JSON.parse(raw) as RoutineRecord[]) : [];
}

export async function saveRecords(records: RoutineRecord[]) {
  await AsyncStorage.setItem(STORAGE_KEYS.records, JSON.stringify(records));
}

export async function addRecord(record: RoutineRecord) {
  const current = await getRecords();
  await saveRecords([record, ...current]);
}

export function createDefaultBabyProfile(): BabyProfile {
  return {
    id: 'baby-1',
    name: 'Miguel',
    birthDate: '2025-01-15',
    sex: 'Masculino',
    createdAt: new Date().toISOString(),
  };
}
