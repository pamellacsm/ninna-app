import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import DevelopmentScreen from './src/screens/DevelopmentScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import MoreScreen from './src/screens/MoreScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import { colors } from './src/theme/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
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
      <Tab.Screen name="Hoje" component={HomeScreen} />
      <Tab.Screen name="Rotina" component={RoutineScreen} />
      <Tab.Screen name="Desenvolvimento" component={DevelopmentScreen} />
      <Tab.Screen name="Mais" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  const isAuthenticated = useMemo(() => isLogged, [isLogged]);

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Onboarding">
                {(props) => <OnboardingScreen {...props} onContinue={() => setIsLogged(true)} />}
              </Stack.Screen>
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} onLogin={() => setIsLogged(true)} />}
              </Stack.Screen>
            </>
          ) : (
            <Stack.Screen name="HomeTabs" component={MainTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
