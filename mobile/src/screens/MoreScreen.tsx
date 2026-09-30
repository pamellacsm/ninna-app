import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

const USER_KEY = 'ninna_user';

export default function MoreScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      const raw = await AsyncStorage.getItem(USER_KEY);
      if (raw) setUser(JSON.parse(raw));
    };
    loadUser();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Mais</Text>
        <Text style={styles.title}>{user?.name || 'Usuário'}</Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.item}>Perfil do bebê</Text>
        <Text style={styles.item}>Múltiplos bebês</Text>
        <Text style={styles.item}>Compartilhamento</Text>
        <Text style={styles.item}>Premium</Text>
        <Text style={styles.item}>Configurações</Text>
        <Text style={styles.item}>Privacidade</Text>
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
  item: { fontSize: 16, color: colors.text, marginBottom: 16 },
});
