import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BookDetails from './screens/BookDetails';
import SplashScreen from './screens/SplashScreen';


const Stack = createStackNavigator();



export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerStyle: {
          backgroundColor: '#86d6fc',
        },
        headerTintColor: '#ffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Library" component={SplashScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BookDetails" component={BookDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
