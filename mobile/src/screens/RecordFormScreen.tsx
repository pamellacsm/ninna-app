import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors } from '../theme/colors';

const TOKEN_KEY = 'ninna_auth_token';
const USER_KEY = 'ninna_user';

export default function RecordFormScreen({ route, navigation }: any) {
  const { type, title } = route.params ?? { type: 'feeding', title: 'Registro' };
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));
  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const babyRaw = await AsyncStorage.getItem('ninna_baby_profile');
      const baby = babyRaw ? JSON.parse(babyRaw) : null;

      if (!token || !baby) {
        Alert.alert('Perfil do bebê obrigatório', 'Cadastre o bebê antes de registrar a rotina');
        setLoading(false);
        return;
      }

      const payload = {
        babyId: baby.id,
        type,
        title,
        value,
        notes,
      };

      const response = await fetch('http://localhost:3000/api/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Não foi possível salvar');
      }

      Alert.alert('Sucesso', 'Registro salvo com sucesso');
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível salvar o registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Registrar {title}</Text>

      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Data"
        placeholderTextColor="#7d877f"
      />

      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Horário"
        placeholderTextColor="#7d877f"
      />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={type === 'feeding' ? 'Quantidade (ml)' : type === 'temp' ? 'Temperatura (°C)' : 'Detalhes'}
        placeholderTextColor="#7d877f"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        value={notes}
        onChangeText={setNotes}
        multiline
        placeholder="Observações"
        placeholderTextColor="#7d877f"
      />

      <Pressable style={styles.primaryButton} onPress={onSave} disabled={loading}>
        <Text style={styles.primaryText}>{loading ? 'Salvando...' : 'Salvar registro'}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 24, paddingTop: 60 },
  title: { color: colors.greenDeep, fontSize: 28, fontWeight: '800', marginBottom: 20 },
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
  textArea: { minHeight: 120, textAlignVertical: 'top' },
  primaryButton: {
    backgroundColor: colors.greenDeep,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryText: { color: colors.white, fontWeight: '700', fontSize: 16 },
});
