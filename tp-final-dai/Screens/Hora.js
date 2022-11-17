import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { traerClima } from '../Axios/axios';

const Hora =({navigation})=>{
    const [fechaHora,setFechaHora]=useState("");
    const [latitud,setLatitud]=useState("");
    const [longitud,setLongitud]=useState("");
    const [clima,setClima]=useState("");
    useEffect (async () => {

        var today = new Date();
        var now = today.toLocaleString();
        setFechaHora(now)
        

        
    },[]);
    useEffect (async () => { 
    (async () => {
    await Location.requestForegroundPermissionsAsync();
    let latYlong = await Location.getCurrentPositionAsync({});
    setLatitud( Math.round(latYlong.coords.latitude * 100) / 100)
    setLongitud( Math.round(latYlong.coords.longitude * 100) / 100)
    })(); 

    },[]);
    const obtenerClima = async() => {
        let clima1 = await traerClima(latitud, longitud) 
        setClima(clima1)
        
    }


    return (
        <View >
       
        <Text></Text>
        <Text>El dia y la hora son: {fechaHora}</Text>
      
        <View id="area-nav">
            
            <Text>{'Ubicacion actual latitud'} : {latitud}</Text>
            <Text >{'Ubicacion actual longitud'} :{longitud }</Text>
            <Button title="Obtener clima" onPress={obtenerClima}></Button>
            {clima &&
            <Text>El clima actual de {latitud},{longitud} es de {clima.temp_c} grados</Text>
            }
        </View>
        </View>
        
    );}
   
    
    
    
    export default Hora