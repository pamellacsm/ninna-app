import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { getPremiumStatus, savePremiumStatus } from '../services/storage';

export default function PremiumScreen() {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const loadStatus = async () => {
      const premium = await getPremiumStatus();
      setIsPremium(Boolean(premium));
    };
    loadStatus();
  }, []);

  const activatePremium = async () => {
    await savePremiumStatus(true);
    setIsPremium(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>NINNA Premium</Text>
      <Text style={styles.subtitle}>Acesse recursos avançados para um acompanhamento completo.</Text>

      <View style={styles.cardHighlight}>
        <Text style={styles.cardLabel}>Plano Premium</Text>
        <Text style={styles.price}>R$ 29,90/mês</Text>
        <Text style={styles.feature}>✓ Relatório para pediatra</Text>
        <Text style={styles.feature}>✓ Histórico de evolução</Text>
        <Text style={styles.feature}>✓ Consultas e vacinas</Text>
        <Text style={styles.feature}>✓ Acompanhamento detalhado</Text>
      </View>

      <View style={styles.list}>
        {['Mamadeira', 'Sono', 'Banho', 'Fralda', 'Crescimento', 'Temperatura', 'Vacinas', 'Consultas'].map((item) => (
          <View key={item} style={styles.itemRow}>
            <Text style={styles.itemText}>{item}</Text>
            <Text style={styles.badge}>{isPremium ? 'Ativo' : 'Premium'}</Text>
          </View>
        ))}
      </View>

      <Pressable style={[styles.button, isPremium && styles.buttonDisabled]} onPress={activatePremium} disabled={isPremium}>
        <Text style={styles.buttonText}>{isPremium ? 'Premium ativo' : 'Ativar Premium'}</Text>
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
  buttonDisabled: { opacity: 0.7 },
  buttonText: { color: colors.greenDeep, fontWeight: '800', fontSize: 18 },
});
