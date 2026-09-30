import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

export default function MoreScreen() {
  const navigation = useNavigation<any>();

  const items = [
    { label: 'Perfil do bebê', action: () => navigation.navigate('BabyProfile') },
    { label: 'Premium', action: () => navigation.navigate('Premium') },
    { label: 'Configurações', action: () => null },
    { label: 'Privacidade', action: () => null },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Mais</Text>
        <Text style={styles.title}>Conta</Text>
      </View>

      <View style={styles.panel}>
        {items.map((item) => (
          <Pressable key={item.label} onPress={item.action} style={styles.itemWrap}>
            <Text style={styles.item}>{item.label}</Text>
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
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  itemWrap: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eef2ee' },
  item: { fontSize: 16, color: colors.text, fontWeight: '600' },
});
