// Ici on determine le comportement de chaque tabs
// Chaque fonction represente une page et a l'interieur on definit les routes

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import BeerListScreen from "../screens/BeerListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CameraScreen from "../screens/CameraScreen";
import AddBeerScreen from "../screens/AddBeerScreen";
import ScannedScreen from "../screens/ScannedScreen";

const Stack = createStackNavigator();

// HomeStack fait reference a Home.js et heberge un lien vers BeerListScreen.js
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BeerListScreen" component={BeerListScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />

      <Stack.Screen name="AddBeerScreen" component={AddBeerScreen} />
      <Stack.Screen name="ScannedScreen" component={ScannedScreen} />
    </Stack.Navigator>
  );
};

// ProfileStack fait reference a Profile.js et heberge un lien vers CameraScreen.js
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
  
      <Stack.Screen name="AddBeerScreen" component={AddBeerScreen} />    
    </Stack.Navigator>
  );
};

// ProfileStack fait reference a Profile.js et heberge un lien vers CameraScreen.js
function BeerListStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BeerListScreen" component={BeerListScreen} />
      <Stack.Screen name="AddBeerScreen" component={AddBeerScreen} />
    </Stack.Navigator>
  );
};

const screenOptionStyle = {
 
};

export { HomeStack, ProfileStack, BeerListStack };