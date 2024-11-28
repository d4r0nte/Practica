import React, { useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';
import Competencias from './src/screens/Competencias';

// Crear navegadores
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Componente de navegación de pestañas
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Competencias" component={Competencias} />
  </Tab.Navigator>
);

// Componente principal que incluye el Drawer y la barra de pestañas
const DrawerNavigator = () => (
  <Drawer.Navigator>
    {/* Esta pantalla muestra el TabNavigator, asegurando que siempre esté visible */}
    <Drawer.Screen name="Inicio" component={TabNavigator} />
    {/* Otras pantallas del Drawer que no deberían tener el TabNavigator */}
    <Drawer.Screen name="Competencias" component={Competencias} />
    <Drawer.Screen name="Configuración" component={SettingsScreen} />
    <Drawer.Screen name="Notification" component={NotificationScreen} />
  </Drawer.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Cambia el estado a "autenticado" después de iniciar sesión
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          // Aquí se muestra el DrawerNavigator, que incluye tanto la barra lateral como las pestañas
          <DrawerNavigator />
        ) : (
          // Pantalla de login si no está autenticado
          <LoginScreen onLogin={handleLogin} />
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
