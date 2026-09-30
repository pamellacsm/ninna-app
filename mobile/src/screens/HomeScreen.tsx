import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

const AUTH_KEY = 'ninna_auth_token';
const USER_KEY = 'ninna_user';

export default function HomeScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      const savedUser = await AsyncStorage.getItem(USER_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    };

    loadUser();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Hoje</Text>
        <Text style={styles.name}>{user?.name ? `Olá, ${user.name.split(' ')[0]}` : 'Olá'}</Text>
        <Text style={styles.age}>Miguel · 8 meses e 12 dias</Text>
      </View>

      <View style={styles.summaryRow}>
        <MiniCard title="Mamadeira" value="Mamou há 42 min" color={colors.greenMid} />
        <MiniCard title="Sono" value="Dormiu há 2h 15m" color={colors.gold} />
      </View>

      <View style={styles.summaryRow}>
        <MiniCard title="Banho" value="Banho há 3h 05m" color={colors.greenSoft} />
        <MiniCard title="Fralda" value="Fralda trocada há 1h 05m" color={colors.success} />
      </View>

      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Resumo</Text>
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
