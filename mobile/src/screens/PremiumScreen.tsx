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

export default function PremiumScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>NINNA Premium</Text>
      <Text style={styles.subtitle}>Acesse recursos avançados para um acompanhamento completo.</Text>

      <View style={styles.cardHighlight}>
        <Text style={styles.cardLabel}>Plano Premium</Text>
        <Text style={styles.price}>R$ 29,90/mês</Text>
        <Text style={styles.feature}>✓ Cólica</Text>
        <Text style={styles.feature}>✓ Medicamentos</Text>
        <Text style={styles.feature}>✓ Vacinas</Text>
        <Text style={styles.feature}>✓ Consultas</Text>
        <Text style={styles.feature}>✓ Relatório para pediatra</Text>
      </View>

      <View style={styles.list}>
        {options.map((item) => (
          <View key={item} style={styles.itemRow}>
            <Text style={styles.itemText}>{item}</Text>
            <Text style={styles.badge}>Premium</Text>
          </View>
        ))}
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ativar Premium</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 24, paddingTop: 60 },
  title: { color: colors.greenDeep, fontSize: 30, fontWeight: '800' },
  subtitle: { color: colors.muted, fontSize: 16, marginTop: 8, marginBottom: 20 },
  cardHighlight: {
    backgroundColor: colors.greenDeep,
    borderRadius: 22,
    padding: 22,
    marginBottom: 24,
  },
  cardLabel: { color: '#dfeadf', fontSize: 14 },
  price: { color: colors.white, fontSize: 30, fontWeight: '800', marginTop: 10, marginBottom: 14 },
  feature: { color: colors.white, fontSize: 15, marginBottom: 6 },
  list: { backgroundColor: colors.white, borderRadius: 20, padding: 18, marginBottom: 20 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  itemText: { color: colors.text, fontWeight: '600' },
  badge: { backgroundColor: colors.gold, color: colors.greenDeep, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, fontWeight: '700' },
  button: {
    backgroundColor: colors.gold,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: { color: colors.greenDeep, fontWeight: '800', fontSize: 18 },
});
