import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Accelerometer } from 'expo-sensors';



const Home =({navigation})=>{
    const [numero,setNumero]=useState();
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });
      const [subscription, setSubscription] = useState(null);
    
      const _slow = () => {
        Accelerometer.setUpdateInterval(1000);
        
      };
    
      const _fast = () => {
        Accelerometer.setUpdateInterval(16);
        
      };
    
      const _subscribe = () => {
        setSubscription(
          Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
      
           
          })
        );
      };
    
      const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
      };
    
      useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
      }, []);
      
  const { x, y, z } = data;
       if(z>2||x>2||y>2){
            Linking.openURL('whatsapp://send?text=Este es un llamado de emergencia para q tu vengaaaaas&phone='+numero)
         }
         const guardarNum = async(numero1) => {
            setNumero(numero1)
            
        }




    const Navegar =async()=>{

        navigation.push('Hora')
    }

    const Navegar2 =async()=>{

        navigation.push('Contactos')
    }
    const Navegar3 =async()=>{

        navigation.push('videoFav')
    }
    const Navegar4 =async()=>{

      navigation.push('qr')
  }
    


return (
    <View >
    <Text></Text>
    <Text >React Native Temas</Text>

    <Button title="Hora actual / Temperatura y Clima"style={styles.button} onPress={Navegar}>Clima</Button>
    <Button title="Contactos"style={styles.button} onPress={Navegar2}>  </Button>
    <Button title="Video favorito"style={styles.button} onPress={Navegar3}>  </Button>
    <Button title="About"style={styles.button} onPress={Navegar4}>  </Button>

    <Text>Tu numero es {numero}</Text>
        <TextInput onChangeText={guardarNum} keyboardType = 'numeric' placeholder="Numer de emergencia"></TextInput>
    </View>
);}
const styles = StyleSheet.create({

    iniciarSesion:{
        fontSize: 75,
        marginTop:30
        
    },
    container:{
        flex: 1,
        width: 100,
        height:100,
        alignItems: 'center',
    
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },

});

export default Home