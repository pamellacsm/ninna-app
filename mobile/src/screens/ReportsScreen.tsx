import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { getStoredBaby, getRecords } from '../services/storage';

function sumNumericValues(records: any[], type: string) {
  return records
    .filter((item) => item.type === type)
    .reduce((acc, item) => {
      const value = Number(item.value || item.quantity || 0);
      return acc + (Number.isFinite(value) ? value : 0);
    }, 0);
}

export default function ReportsScreen() {
  const [baby, setBaby] = useState<any>(null);
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const savedBaby = await getStoredBaby();
      const savedRecords = await getRecords();
      if (savedBaby) setBaby(savedBaby);
      setRecords(savedRecords || []);
    };
    loadData();
  }, []);

  const feedingTotal = sumNumericValues(records, 'feeding');
  const diaperTotal = records.filter((item) => item.type === 'diaper').length;
  const sleepTotal = records.filter((item) => item.type === 'sleep').length;
  const bathTotal = records.filter((item) => item.type === 'bath').length;
  const lastRecord = [...records].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
  const babyName = baby?.name || 'Miguel';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Relatório</Text>
        <Text style={styles.title}>{babyName}</Text>
      </View>

      <View style={styles.grid}>
        <MetricCard label="Mamadeiras" value={`${feedingTotal || 0} ml`} />
        <MetricCard label="Fraldas" value={`${diaperTotal}`} />
        <MetricCard label="Sonecas" value={`${sleepTotal}`} />
        <MetricCard label="Banhos" value={`${bathTotal}`} />
      </View>

      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Resumo da semana</Text>
        <Text style={styles.text}>A rotina do bebê está estável e com boa consistência.</Text>
        <Text style={styles.text}>Você registrou {records.length} ações, com foco em alimentação, sono e higiene.</Text>
        <Text style={styles.text}>Último registro: {lastRecord ? new Date(lastRecord.createdAt).toLocaleString() : 'Ainda não há registros'}</Text>
      </View>
    </ScrollView>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
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
  label: { color: '#dfeadf', fontSize: 14, marginBottom: 8 },
  title: { color: colors.white, fontSize: 30, fontWeight: '700' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  metricCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  metricLabel: { color: colors.muted, fontSize: 13 },
  metricValue: { color: colors.text, fontSize: 22, fontWeight: '700', marginTop: 8 },
  panel: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: 10 },
  text: { fontSize: 15, color: colors.text, marginBottom: 8, lineHeight: 22 },
});
