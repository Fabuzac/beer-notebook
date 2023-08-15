import { Text, View, StyleSheet, Button, Pressable, FlatList, SafeAreaView  } from 'react-native' ;
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import AddBeerButton from '../components/AddBeerButton';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios"

function BeerListScreen({ navigation }) {
  const [data, setData] = useState([]);

  // TODO: find a way to refresh data when switch to tab
  // API Fetch data
  const fetchData = () => {
    
    axios.get(`${localhost}/beers`)

    .then(response => {
      console.log('Render the list of the beers, Status 200 ✅')   
      setData(response.data) 
    })       

    .catch(error => {
      console.log(error.response)
    })
  }
   useEffect(() => {
    fetchData();
  }, []);

  // Front
  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>Beer Screen List</Text>
        
        <SafeAreaView style={styles.containerAreaView}>
          <FlatList 
            data={data}
            renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>

      {/*
      Button add beer
      <View style={styles.center}>  
        <AddBeerButton onPress={() => navigation.navigate("AddBeerScreen")}>         
        </AddBeerButton>
      </View>  
      */}
    </View>
  );
};

export default BeerListScreen;

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
  item: {
    padding: 15,
    fontSize: 15,
    marginTop: 0,
  },
  containerAreaView: {
    padding: 5,
    flex: 1,
  }

});
