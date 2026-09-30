import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { routineItems } from '../data/mockData';

export default function RoutineScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Rotina</Text>
        <Text style={styles.title}>Hoje</Text>
      </View>

      <View style={styles.panel}>
        {routineItems.map((item) => (
          <View key={`${item.time}-${item.label}`} style={styles.row}>
            <Text style={styles.time}>{item.time}</Text>
            <View style={styles.itemBox}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              <Text style={styles.itemDetail}>{item.detail}</Text>
            </View>
          </View>
        ))}
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
});
