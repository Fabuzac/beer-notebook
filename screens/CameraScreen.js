import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import dump from '../utils/utils';
import axios from "axios"

import { CommonActions } from '@react-navigation/native';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [productScanned, setProductScanned] = useState([]);
  const [brandProduct, setBrandProduct] = useState([]);
  const [barCode, setBarCode] = useState([]);
  const [statusProductScanned, setStatusProductScanned ] = useState([]);

  const [query, setQuery ] = useState([]);
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();

    // TODO: FOR DEBUG
    // navigation.dispatch(CommonActions.goBack());
    //   navigation.dispatch(
    //     CommonActions.navigate({
    //       name: 'ScannedScreen',
    //       params: {
    //         log: dump('The redirection worked'),
    //       },
    //     })
    //   );
  }, []);
  


  // Set the product ID in database
  const handleBarCodeScanned = ({ type, data }) => { //==================================================================/
    setScanned(true);

    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    const baseURL = "https://world.openfoodfacts.org/api/v0/product/";
    axios.get(`${baseURL+data+".json"}`)
    .then(response => {

      if (response.status === 200) {
        console.log(response.status) //response.data

        let gotResponse = response.data.product;
        return gotResponse
      }
    })

    .then(gotResponse => {    

      axios.post(`${localhost}/beers`, {
        'product_id' : gotResponse.id,
        'brand' : gotResponse.brands
      })
      
      console.log('✅ Posted ! 😉')

      // Step back for close camera and redirect to beer list

      // navigation.dispatch(CommonActions.goBack());
      // navigation.dispatch(
      //   CommonActions.navigate({
      //     name: 'Beer',
      //     params: {
      //       log: dump('The redirection worked'),
      //     },
      //   })
      // );
    })   

    .catch(error => {
      console.error('❌ Erreur lors de la requête POST:', error);
    })
  };

  return (
    <>
      {hasPermission ? null : <Text>Requesting for camera permission</Text>}
      {hasPermission ? false : <Text>No access to camera</Text>}

      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
        
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});