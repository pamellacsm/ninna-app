import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { todaySummary, quickActions } from '../data/mockData';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Hoje</Text>
        <Text style={styles.name}>{todaySummary.babyName}</Text>
        <Text style={styles.age}>{todaySummary.age}</Text>
      </View>

      <View style={styles.summaryRow}>
        <Card title="Mamadeira" value={todaySummary.lastFeed} color={colors.greenMid} />
        <Card title="Sono" value={todaySummary.lastSleep} color={colors.gold} />
      </View>

      <View style={styles.summaryRow}>
        <Card title="Banho" value={todaySummary.lastBath} color={colors.greenSoft} />
        <Card title="Fralda" value={todaySummary.lastDiaper} color={colors.success} />
      </View>

      <View style={styles.quickActionsWrapper}>
        <Text style={styles.sectionTitle}>Registrar</Text>
        <View style={styles.quickActions}>
          {quickActions.map((item) => (
            <Pressable key={item} style={styles.quickAction}>
              <Text style={styles.quickActionText}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Resumo</Text>
        <Text style={styles.metric}>Temperatura: {todaySummary.temp}</Text>
        <Text style={styles.metric}>Água: {todaySummary.water}</Text>
        <Text style={styles.metric}>Último banho: {todaySummary.lastBath}</Text>
      </View>
    </ScrollView>
  );
}

function Card({ title, value, color }: { title: string; value: string; color: string }) {
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
  name: { color: colors.white, fontSize: 32, fontWeight: '700' },
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
  quickActionsWrapper: { marginTop: 10, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: 12 },
  quickActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  quickAction: {
    backgroundColor: '#edf3ee',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 10,
    marginBottom: 10,
  },
  quickActionText: { color: colors.greenDeep, fontWeight: '600' },
  panel: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  metric: { fontSize: 16, color: colors.text, marginBottom: 8 },
});
