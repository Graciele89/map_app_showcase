import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Details from './screen/Details';
import { Text, View } from 'react-native';
import React from 'react';


const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View>
    //   <Text> TEST </Text>
    // </View>
    
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;