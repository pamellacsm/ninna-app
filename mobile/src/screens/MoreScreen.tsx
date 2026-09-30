import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors } from '../theme/colors';

export default function MoreScreen() {
  const menuItems = [
    'Perfil do bebê',
    'Múltiplos bebês',
    'Compartilhamento',
    'Premium',
    'Configurações',
    'Privacidade',
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Mais</Text>
        <Text style={styles.title}>NINNA</Text>
      </View>

      <View style={styles.panel}>
        {menuItems.map((item) => (
          <Pressable key={item} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
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
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemText: { color: colors.text, fontSize: 16, fontWeight: '600' },
  chevron: { color: colors.muted, fontSize: 22 },
});
