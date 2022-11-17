import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Hora from '../Screens/Hora';
import Contactos from '../Screens/Contactos';
import qr from '../Screens/qr';


const Stack = createNativeStackNavigator(); 

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
          name="Home"
          component={Home}
      /> 
              <Stack.Screen
          name="Hora"
          component={Hora}
      /> 
       <Stack.Screen
          name="Contactos"
          component={Contactos}
      /> 
         <Stack.Screen
          name="qr"
          component={qr}
      /> 
         <Stack.Screen
         name="CambioImagen"
         component={CambioImagen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main