import { Text, View, StyleSheet, Pressable, Button } from 'react-native' ;
import React, { useState, useEffect } from 'react';
import dump from '../utils/utils';
import axios from "axios"

function ScannedScreen({ navigation }) {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetchProductId();
    // fetchProduct(); 
  }, []);

  const fetchProductId = async() => {

    await axios.get(`${localhost}/productId/id`)

    .then(response => {
      
      setQuery(response.data[0].product_id) 
    })       

    .catch(error => {
      console.log(error.response)
    })
  }  
  
  // Seconde partie: recuperer le produit avec ID du produit
  const fetchProduct = async() => {
    dump(query);

    // const baseURL = "https://world.openfoodfacts.org/api/v0/product/";
    // await axios.get(`${baseURL+query+".json"}`)

    // .then(response => {

      // dump(response.data);
      // dump(query)
      // console.log(response.data)   

      // setData(response.data) 
      // setProductScanned(JSON.stringify(response.data))

    // })       

    // .catch(error => {
    //   console.log(error.response)      
    // })
  }

  // onClick={ () => this.handleLike()}

  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>Scanned Screen</Text>
        <View style={styles.center}>
          {/* <Button
            title="Go to Iso Screen"
            onPress={() => navigation.navigate("IsoScreen")}
          />         */}
        </View>
        <View>
          <Text>
            Your scanned {query}
          </Text>
          <Button
            title="Fetch Product"
            onPress={() => fetchProduct()}
          />    
        </View>
      </View>
    </View>
  );
};

export default ScannedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },

});
