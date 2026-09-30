import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function LoginScreen({ onLogin }: { onLogin?: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Acompanhe a rotina da sua família.</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#7d877f"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#7d877f"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={() => onLogin && onLogin()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Text style={styles.link}>Esqueci minha senha</Text>
      <Text style={styles.link}>Criar conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    justifyContent: 'center',
    padding: 28,
  },
  title: { fontSize: 30, fontWeight: '800', color: colors.greenDeep, marginBottom: 6 },
  subtitle: { fontSize: 16, color: colors.muted, marginBottom: 24 },
  input: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e7e3df',
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.greenDeep,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 18,
  },
  buttonText: { color: colors.white, fontWeight: '700', fontSize: 16 },
  link: { color: colors.greenDeep, textAlign: 'center', marginBottom: 12, fontWeight: '600' },
});
