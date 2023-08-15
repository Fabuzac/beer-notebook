import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import dump from '../utils/utils';
import '../utils/utils'; // Global variable: nodeJsURL
import axios from "axios"

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [query, setQuery] = useState([]);

  const [productScanned, setProductScanned] = useState([]);
  const [brandProduct, setBrandProduct] = useState([]);
  const [barCode, setBarCode] = useState([]);
  const [statusProductScanned, setStatusProductScanned ] = useState([]);

  const [boo1, setBoo1] = useState([false]);
  const [boo2, setBoo2] = useState([false]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  // TODO: envoyer le Data(code scanned) dans le state query
  // avant qu'il ne soit appeler dans le get AXIOS

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBoo1(true);
    setQuery(JSON.stringify(data));

    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    axios.post(`${localhost}/productId`, {
      'productId' : data,
    })

    .then(response => {    
      console.log(response.status, response.data)
      //redirect
    })       
    .catch(error => {
      console.error('❌ Erreur lors de la requête POST:', error);
    })
  };

  // dump(query);
  
  // function getData() {
  //   if (query.length > 0) {
  //     setBoo2(true);

  //     const baseURL = "https://world.openfoodfacts.org/api/v0/product/";
  //     axios.get(`${baseURL+query+".json"}`)
  
  //     .then(response => {

  //       setProductScanned(JSON.stringify(response.data))
        
  //       // setProductScanned(response.data)
  //       // setBrandProduct(response.data.product.brands)
  //       // setBarCode(response.data.product.code);
  //       // setStatusProductScanned(response.data.status);
    
  //       // ingredients_text_debug
  //       // manufacturing_places
  //     })       
    
  //     .catch(error => {
  //       console.log(error.response)
  //     })
  //   }
  // }

  // getData();
  // dump('Im the product scanned...' + productScanned);
  // Retourne [object Object] en boucle


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
