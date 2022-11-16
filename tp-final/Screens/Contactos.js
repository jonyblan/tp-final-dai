import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { traerClima } from '../Axios/axios';
import * as Contacts from 'expo-contacts';

const Contactos =({navigation})=>{
    const [contactos, setContactos] = useState([]);


    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],

            });
            setContactos(data)

          }
        })();
      }, []);
      const renderItem = ({ item }) => {
        console.log(item.phoneNumbers)
        return <TouchableOpacity style={styles.item} 
          >
           {item.firstName  && <View>
          <Text style={styles.title}>Nombre contacto 1: {item.firstName}</Text>
          {item.lastName && <Text style={styles.title}>Nombre ultimo contacto: {item.lastName}</Text>}
          {item.phoneNumbers.map(phone=><Text key={phone.id} style={styles.title}>numero: {phone.number}</Text>)}
          
           </View>}
        </TouchableOpacity>
       
      };

    if (contactos.length === 0) return <View><Text>Loading...</Text></View>

    return (
    <View >
      <Text></Text>
        <Text>Lista de contactos</Text>
        <FlatList
        data={contactos}
        renderItem={renderItem}
        keyExtractor={(data) => data.id}
      />
    </View>
        
    );}
   
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {

        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 15,
      }
    });
    
    export default Contactos