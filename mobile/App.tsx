import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import DevelopmentScreen from './src/screens/DevelopmentScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import MoreScreen from './src/screens/MoreScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import BabyProfileScreen from './src/screens/BabyProfileScreen';
import RegisterOptionsScreen from './src/screens/RegisterOptionsScreen';
import RecordFormScreen from './src/screens/RecordFormScreen';
import PremiumScreen from './src/screens/PremiumScreen';
import ReportsScreen from './src/screens/ReportsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/theme/colors';
import { getStoredToken } from './src/services/storage';

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
  const [isLogged, setIsLogged] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const checkSession = async () => {
      const token = await getStoredToken();
      setIsLogged(Boolean(token));
      setReady(true);
    };

    checkSession();
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLogged ? (
            <>
              <Stack.Screen name="Onboarding">
                {(props) => <OnboardingScreen {...props} onContinue={() => setIsLogged(true)} />}
              </Stack.Screen>
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} onLogin={() => setIsLogged(true)} />}
              </Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="HomeTabs" component={MainTabs} />
              <Stack.Screen name="BabyProfile" component={BabyProfileScreen} />
              <Stack.Screen name="RegisterOptions" component={RegisterOptionsScreen} />
              <Stack.Screen name="RecordForm" component={RecordFormScreen} />
              <Stack.Screen name="Premium" component={PremiumScreen} />
              <Stack.Screen name="Reports" component={ReportsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
