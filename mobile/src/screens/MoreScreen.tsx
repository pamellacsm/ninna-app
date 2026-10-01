import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

export default function MoreScreen() {
  const [userName, setUserName] = useState('Usuário');

  useEffect(() => {
    const loadUser = async () => {
      const raw = await AsyncStorage.getItem('ninna_user');
      if (raw) {
        const user = JSON.parse(raw);
        setUserName(user?.name || 'Usuário');
      }
    };
    loadUser();
  }, []);

  const items = [
    { label: 'Perfil do bebê', route: 'BabyProfile' },
    { label: 'Relatório', route: 'Reports' },
    { label: 'Premium', route: 'Premium' },
    { label: 'Configurações', route: null },
    { label: 'Privacidade', route: null },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Mais</Text>
        <Text style={styles.title}>{userName}</Text>
      </View>

      <View style={styles.panel}>
        {items.map((item) => (
          <Pressable
            key={item.label}
            onPress={() => item.route && navigation.navigate(item.route)}
            style={styles.itemWrap}
          >
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
