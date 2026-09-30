import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

export default function BabyProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfil do bebê</Text>
      <Text style={styles.subtitle}>Cadastre os dados principais para personalizar a rotina.</Text>

      <View style={styles.avatarWrap}>
        <Text style={styles.avatar}>M</Text>
      </View>

      <TextInput style={styles.input} placeholder="Nome do bebê" placeholderTextColor="#7d877f" />
      <TextInput style={styles.input} placeholder="Data de nascimento" placeholderTextColor="#7d877f" />
      <TextInput style={styles.input} placeholder="Sexo (opcional)" placeholderTextColor="#7d877f" />

      <Pressable style={styles.primaryButton}>
        <Text style={styles.primaryText}>Salvar perfil</Text>
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
