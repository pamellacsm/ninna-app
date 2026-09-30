import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import DevelopmentScreen from './src/screens/DevelopmentScreen';
import { colors } from './src/theme/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.gold,
            tabBarInactiveTintColor: '#b6c5b1',
            tabBarStyle: {
              backgroundColor: colors.greenDeep,
              borderTopColor: '#25482C',
              height: 72,
              paddingBottom: 10,
              paddingTop: 8,
            },
          }}
        >
          <Tab.Screen
            name="Hoje"
            component={HomeScreen}
            options={{ tabBarLabel: 'Hoje' }}
          />
          <Tab.Screen
            name="Desenvolvimento"
            component={DevelopmentScreen}
            options={{ tabBarLabel: 'Desenvolvimento' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
