import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import qrimg from '../frame.png'
import { BarCodeScanner } from 'expo-barcode-scanner';

const qr =({navigation})=>{
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [Escaner, setEscaner] = useState(false);

    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

  const ponerEscaner =async()=>{
setEscaner(true)
      
  }

    return (
        <View style={styles.container}>
          <Text></Text>

           <Button title="Escaner de qr"style={styles.button} onPress={ponerEscaner}></Button>
           <Text></Text>
           <Text></Text>
       
        <Image  source={qrimg}></Image>
         {Escaner &&
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />}
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
        
    );}
   
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        },
        img: {
          alignSelf: 'center',
          width: 320,
          height: 200,
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
    
    
    export default qr