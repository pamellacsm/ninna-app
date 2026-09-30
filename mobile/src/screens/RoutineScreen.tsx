import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { getRecords } from '../services/storage';

export default function RoutineScreen() {
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    const loadRecords = async () => {
      const saved = await getRecords();
      setRecords(saved);
    };

    loadRecords();
  }, []);

  const today = new Date().toISOString().slice(0, 10);
  const todaysRecords = records.filter((record) => {
    const created = record.createdAt ? new Date(record.createdAt).toISOString().slice(0, 10) : null;
    return created === today;
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Rotina</Text>
        <Text style={styles.title}>Hoje</Text>
      </View>

      <View style={styles.panel}>
        {todaysRecords.length === 0 ? (
          <Text style={styles.empty}>Nenhum registro hoje ainda.</Text>
        ) : (
          todaysRecords.map((item, index) => (
            <View key={`${item.id || index}-${item.createdAt}`} style={styles.row}>
              <Text style={styles.time}>{new Date(item.createdAt).toTimeString().slice(0, 5)}</Text>
              <View style={styles.itemBox}>
                <Text style={styles.itemLabel}>{item.title || 'Registro'}</Text>
                <Text style={styles.itemDetail}>{item.value || item.notes || 'Sem detalhe'}</Text>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
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
  panel: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  time: { color: colors.greenDeep, fontWeight: '700', width: 60 },
  itemBox: {
    flex: 1,
    backgroundColor: '#edf3ee',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemLabel: { color: colors.text, fontWeight: '700', fontSize: 16 },
  itemDetail: { color: colors.muted, marginTop: 4 },
  empty: { color: colors.muted, fontSize: 16 },
});
