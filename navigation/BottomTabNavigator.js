import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BeerListScreen from '../screens/BeerListScreen';
import { Ionicons } from '@expo/vector-icons';
import { BeerListStack, HomeStack, ProfileStack } from './StackNavigator';

const Tab = createBottomTabNavigator();

// Ici le StackNavigator surcharge les routes du tabNavigator.
function BottomTabNavigator() {

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = 'ios-home-outline';
          }

          if (route.name === 'Bières') {
            iconName = 'ios-beer-outline';
          }

          if (route.name === 'Profil') {
            iconName = 'ios-person-outline';              
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#78a02e',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      > 
      <Tab.Screen name="Bières" component={BeerListStack} />
      <Tab.Screen name="Accueil" component={HomeStack} />
      <Tab.Screen name="Profil" component={ProfileStack} />  
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;