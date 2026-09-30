import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { addRecord } from '../services/storage';

export default function RecordFormScreen({ route, navigation }: any) {
  const { type, title } = route.params ?? { type: 'feeding', title: 'Registro' };
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));

  const onSave = async () => {
    const record = {
      id: `${Date.now()}`,
      type,
      title,
      value,
      notes,
      quantity: value,
      createdAt: new Date(`${date}T${time}`).toISOString(),
    };

    await addRecord(record);
    navigation.goBack();
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

      <Pressable style={styles.primaryButton} onPress={onSave}>
        <Text style={styles.primaryText}>Salvar registro</Text>
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
