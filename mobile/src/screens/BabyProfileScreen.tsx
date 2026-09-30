import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors } from '../theme/colors';

const USER_KEY = 'ninna_user';
const TOKEN_KEY = 'ninna_auth_token';

export default function BabyProfileScreen() {
  const [name, setName] = useState('Miguel');
  const [birthDate, setBirthDate] = useState('2025-01-15');
  const [sex, setSex] = useState('Masculino');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const raw = await AsyncStorage.getItem('ninna_baby_profile');
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setName(parsed.name || 'Miguel');
      setBirthDate(parsed.birthDate || '2025-01-15');
      setSex(parsed.sex || 'Masculino');
    };
    loadProfile();
  }, []);

  const saveProfile = async () => {
    setLoading(true);

    try {
      const rawUser = await AsyncStorage.getItem(USER_KEY);
      const user = rawUser ? JSON.parse(rawUser) : null;
      const token = await AsyncStorage.getItem(TOKEN_KEY);

      if (!user || !token) {
        Alert.alert('Você precisa estar logado para salvar o perfil do bebê');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:3000/api/babies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: user.id,
          name,
          birthDate,
          sex,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Não foi possível salvar o bebê');
      }

      await AsyncStorage.setItem('ninna_baby_profile', JSON.stringify({
        id: data.baby.id,
        name: data.baby.name,
        birthDate: data.baby.birthDate,
        sex,
      }));

      Alert.alert('Sucesso', 'Perfil do bebê salvo com sucesso');
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível salvar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfil do bebê</Text>
      <Text style={styles.subtitle}>Cadastre os dados principais para personalizar a rotina.</Text>

      <View style={styles.avatarWrap}>
        <Text style={styles.avatar}>{name ? name.charAt(0).toUpperCase() : 'B'}</Text>
      </View>

      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nome do bebê" placeholderTextColor="#7d877f" />
      <TextInput style={styles.input} value={birthDate} onChangeText={setBirthDate} placeholder="Data de nascimento" placeholderTextColor="#7d877f" />
      <TextInput style={styles.input} value={sex} onChangeText={setSex} placeholder="Sexo (opcional)" placeholderTextColor="#7d877f" />

      <Pressable style={styles.primaryButton} onPress={saveProfile} disabled={loading}>
        <Text style={styles.primaryText}>{loading ? 'Salvando...' : 'Salvar perfil'}</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Adicionar outro bebê</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 24, paddingTop: 60 },
  title: { color: colors.greenDeep, fontSize: 28, fontWeight: '800' },
  subtitle: { color: colors.muted, fontSize: 16, marginTop: 8, marginBottom: 24 },
  avatarWrap: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },
  avatar: { color: colors.greenDeep, fontSize: 42, fontWeight: '800' },
  input: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e7e3df',
    color: colors.text,
  },
  primaryButton: {
    backgroundColor: colors.greenDeep,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryText: { color: colors.white, fontWeight: '700', fontSize: 16 },
  secondaryButton: {
    backgroundColor: '#edf3ee',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 14,
  },
  secondaryText: { color: colors.greenDeep, fontWeight: '700', fontSize: 16 },
});
