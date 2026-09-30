import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../theme/colors';

export default function OnboardingScreen({ navigation, onContinue }: { navigation: any; onContinue?: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Text style={styles.symbol}>N</Text>
      </View>
      <Text style={styles.title}>NINNA</Text>
      <Text style={styles.subtitle}>Cada fase importa. Cada detalhe também.</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          if (onContinue) {
            onContinue();
            return;
          }
          navigation.navigate('Login');
        }}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenDeep,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoWrap: {
    width: 110,
    height: 110,
    borderRadius: 30,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  symbol: { color: colors.greenDeep, fontSize: 52, fontWeight: '800' },
  title: { color: colors.white, fontSize: 42, fontWeight: '800', letterSpacing: 4 },
  subtitle: {
    color: '#dfeadf',
    fontSize: 18,
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.gold,
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { color: colors.greenDeep, fontWeight: '700', fontSize: 18 },
});
