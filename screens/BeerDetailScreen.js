import { Text, View, StyleSheet, Pressable, Button } from 'react-native' ;
import React, { useState, useEffect } from 'react';
import { dump } from '../utils/utils'
import axios from "axios"

function BeerDetailScreen({ navigation, route }) {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    // fetchProductId();

    
  }, [data]);

  const productId = route.params;
  const lastProductIdScanned = productId['product_id'];

  const fetchProductId = async() => {

    const productId = route.params;
    const lastProductIdScanned = productId['product_id'];

    axios(`${localhost}/beers/${productId['product_id']}`) // Verifier pourquoi le call API est undefined
    .then(response => {
      // dump(response.data[0].id)
      dump(response.data) // Return: vide
    })  


    // await axios.get(`${localhost}/beers/${lastProductIdScanned}`)

    // .then(response => {
      
    //   setData(response.data[0]);    
    // })       

    // .catch(error => {
    //   console.log(error.response)
    // })
  }  
  
  const fetchProduct = async() => {
    
    // lastProductScanned();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>Detail</Text>
        <View style={styles.center}>
 
        </View>
        <View>
          <Text>
            You scanned the beer :
            {/* <Text style={styles.brand}> {data.brand}</Text> */}
            { lastProductIdScanned }
          </Text>
          <Text>
            {/* Product ID:<Text style={styles.brand}> {data.product_id}</Text> */}
          </Text>
          <Button
            title="SAVE"
            // onPress={() => fetchProduct()}
          />    
        </View>
       
      </View>
    </View>
  );
};

export default BeerDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaf3",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  brand: {
    fontWeight: 'bold',
    color: '#78a02e'
    
  }

});
