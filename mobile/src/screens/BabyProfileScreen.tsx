import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors } from '../theme/colors';
import { saveBaby } from '../services/storage';

export default function BabyProfileScreen({ navigation }: any) {
  const [name, setName] = useState('Miguel');
  const [birthDate, setBirthDate] = useState('2025-01-15');
  const [gender, setGender] = useState('Masculino');
  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    if (!name.trim()) {
      Alert.alert('Preencha o nome do bebê');
      return;
    }

    setLoading(true);

    try {
      await saveBaby({
        name: name.trim(),
        birthDate,
        gender,
        updatedAt: new Date().toISOString(),
      });
      Alert.alert('Perfil salvo', 'Dados do bebê atualizados com sucesso.');
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível salvar o perfil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfil do bebê</Text>
      <Text style={styles.subtitle}>Cadastre os dados principais para personalizar a rotina.</Text>

      <View style={styles.avatarWrap}>
        <Text style={styles.avatar}>{name?.charAt(0)?.toUpperCase() || 'M'}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome do bebê"
        placeholderTextColor="#7d877f"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        placeholderTextColor="#7d877f"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo (opcional)"
        placeholderTextColor="#7d877f"
        value={gender}
        onChangeText={setGender}
      />

      <Pressable style={styles.primaryButton} onPress={onSave} disabled={loading}>
        <Text style={styles.primaryText}>{loading ? 'Salvando...' : 'Salvar perfil'}</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
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
