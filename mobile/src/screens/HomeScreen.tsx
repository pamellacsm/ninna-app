import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { getStoredBaby, getStoredUser, getRecords } from '../services/storage';

export default function HomeScreen() {
  const [user, setUser] = useState<any>(null);
  const [baby, setBaby] = useState<any>(null);
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const savedUser = await getStoredUser();
      const savedBaby = await getStoredBaby();
      const savedRecords = await getRecords();

      if (savedUser) setUser(savedUser);
      if (savedBaby) setBaby(savedBaby);
      if (savedRecords) setRecords(savedRecords);
    };

    loadData();
  }, []);

  const babyName = baby?.name || 'Miguel';
  const firstName = user?.name ? user.name.split(' ')[0] : 'Olá';

  const lastFeeding = records
    .filter((item) => item.type === 'feeding')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

  const lastSleep = records
    .filter((item) => item.type === 'sleep')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

  const lastDiaper = records
    .filter((item) => item.type === 'diaper')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

  const recentStatus =
    lastFeeding || lastSleep || lastDiaper
      ? 'Últimas ações registradas com sucesso.'
      : 'Ainda não há registros hoje.';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Hoje</Text>
        <Text style={styles.name}>{user?.name ? `Olá, ${firstName}` : 'Olá'}</Text>
        <Text style={styles.age}>{babyName} · 8 meses e 12 dias</Text>
      </View>

      <View style={styles.summaryRow}>
        <MiniCard
          title="Mamadeira"
          value={lastFeeding ? `${lastFeeding.value || '100'} ml` : 'Sem registro'}
          color={colors.greenMid}
        />
        <MiniCard
          title="Sono"
          value={lastSleep ? lastSleep.title : 'Sem registro'}
          color={colors.gold}
        />
      </View>

      <View style={styles.summaryRow}>
        <MiniCard
          title="Banho"
          value={records.some((item) => item.type === 'bath') ? 'Registrado' : 'Sem registro'}
          color={colors.greenSoft}
        />
        <MiniCard
          title="Fralda"
          value={lastDiaper ? lastDiaper.title : 'Sem registro'}
          color={colors.success}
        />
      </View>

      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Resumo</Text>
        <Text style={styles.metric}>{recentStatus}</Text>
        <Text style={styles.metric}>Temperatura: 36,8°C</Text>
        <Text style={styles.metric}>Água: 1 copo</Text>
        <Text style={styles.metric}>Último banho: 3h 05m</Text>
      </View>
    </ScrollView>
  );
}

function MiniCard({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.cream, flex: 1 },
  content: { padding: 20, paddingBottom: 60 },
  headerCard: {
    backgroundColor: colors.greenDeep,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
  },
  label: { color: '#dfeadf', fontSize: 14, marginBottom: 6 },
  name: { color: colors.white, fontSize: 30, fontWeight: '700' },
  age: { color: '#dfeadf', fontSize: 16, marginTop: 4 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, gap: 12 },
  card: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    minHeight: 110,
    justifyContent: 'center',
  },
  cardTitle: { fontSize: 14, color: colors.white, fontWeight: '600' },
  cardValue: { marginTop: 8, color: colors.white, fontSize: 18, fontWeight: '700' },
  panel: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: 12 },
  metric: { fontSize: 16, color: colors.text, marginBottom: 8 },
});
