import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

const options = [
  'Mamadeira',
  'Sono',
  'Banho',
  'Fralda',
  'Xixi',
  'Cocô',
  'Temperatura',
  'Cólica',
  'Crescimento',
  'Diário',
];

export default function RegisterOptionsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>+ Registrar</Text>
      <Text style={styles.subtitle}>Escolha a ação que você quer registrar agora.</Text>

      <View style={styles.grid}>
        {options.map((item) => (
          <Pressable key={item} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 24, paddingTop: 60 },
  title: { color: colors.greenDeep, fontSize: 30, fontWeight: '800' },
  subtitle: { color: colors.muted, fontSize: 16, marginTop: 8, marginBottom: 20 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  card: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#edf2ec',
    marginBottom: 12,
  },
  cardText: { color: colors.greenDeep, fontWeight: '700', fontSize: 16 },
});
