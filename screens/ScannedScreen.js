import { Text, View, StyleSheet, Pressable, Button } from 'react-native' ;
import React, { useState, useEffect } from 'react';
import dump from '../utils/utils';
import axios from "axios"

function ScannedScreen({ navigation, route }) {

  const [dataId, setDataId] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetchProductId();
    // fetchProduct(); 
    // console.log(data);
    
  }, [dataId]);

  const fetchProductId = async() => {

    const productId = route.params;
    const lastProductIdScanned = productId['product_id'];

    await axios.get(`${localhost}/beers/${lastProductIdScanned}`)

    .then(response => {
      // setQuery(response.data[0].id);
      setDataId(response.data[0]);
      // dump(response); UNDEFINED
    })       

    .catch(error => {
      console.log(error.response)
    })
  }  
  
  // Seconde partie: recuperer le produit avec ID du produit
  const fetchProduct = async() => {
    // dump(query);
    lastProductScanned();

    // const baseURL = "https://world.openfoodfacts.org/api/v0/product/";
    // await axios.get(`${baseURL+query+".json"}`)

    // .then(response => {

      // dump(response.data);
      // dump(query)
      // console.log(response.data)   

      // setDataId(response.data) 
      // setProductScanned(JSON.stringify(response.data))

    // })       

    // .catch(error => {
    //   console.log(error.response)      
    // })
  }

  // const lastProductScanned = async() => {

  //   await axios.get(`${localhost}/beers`)

  //   .then(response => {
  //     // console.log(response.data);

  //     const result = response.data;

  //     for (let index = 0; index < result.length; index++) {
  //       const element = result[index];
  //       const array_date = element['created_date'];
  //       let now = new Date;
  //       let rightNow = now.toString();
        
  //       dump(rightNow);
  //       // dump()
        
      

  //       // if (/* la date la plus proche de maintenant */) {
          
  //       // }
  //     }
  //   })       

  //   .catch(error => {
  //     console.log(error.response)
  //   })
  // }  

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
            You scanned the beer 
            <Text style={styles.brand}> {dataId.brand}</Text>
          </Text>
          <Text>
            Product ID:<Text style={styles.brand}> {dataId.product_id}</Text>
          </Text>
          <Button
            title="SAVE"
            onPress={() => fetchProduct()}
          />    
        </View>
        <Text>Autem tenetur incidunt praesentium neque qui recusandae. Dolore qui nam quo esse mollitia. Dolores laboriosam beatae in est aperiam eum maxime. Rerum aut quis delectus voluptatem non eos soluta. Dolores perspiciatis labore dignissimos harum repellat corporis vel. Impedit quia officia ut quibusdam hic atque dolor alias.</Text>
      </View>
    </View>
  );
};

export default ScannedScreen;

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
