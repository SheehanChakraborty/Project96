import {StatusBar}from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'
import HomeScreen from "./screens/HomeScreen";
import Stuff from "./screens/Stuff";
import Ncert from "./screens/Ncert";
import Storybooks from "./screens/Storybooks";
export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator InitialRouteName ='Home' screenOptions={{headerShown:false}}>
                 <Stack.Screen name = 'Home'component={HomeScreen}/>
                 <Stack.Screen name = 'Stuff'component={Stuff}/>
                 <Stack.Screen name = 'Ncert'component={Ncert}/>
                  <Stack.Screen name = 'Storybooks'component={Storybooks}/>
          </Stack.Navigator>
          

      </NavigationContainer>
  );
}
const Stack = createStackNavigator()


const styles = StyleSheet.create({
 
});
