import { Text, View, StyleSheet, Button, Pressable, FlatList, SafeAreaView, ActivityIndicator, RefreshControl, Image  } from 'react-native' ;
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import BeerListButton from '../components/BeerListButton';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios"
import { dump } from '../utils/utils'
import { CommonActions } from '@react-navigation/native';

function BeerListScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState([true]);

  useEffect(() => {
    fetchData();

  }, []);

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
   

  const loadUserData = () => {
    axios.get(`${localhost}/beers`)
      .then(response => {
        setRefreshing(false);     
        setData(response.data);
        console.log('Page refreshed ! ➰');
      })   
      .catch(error => {
        console.log(error.response);
      })
  };

  // Front
  return (
    <View style={styles.container}>
      <View style={styles.header}> 

        <View style={styles.containerTitle}>
          <Text style={styles.title}>Ma cave</Text>
          <Image style={styles.ipapo} source={require('../assets/icons/hop_1451525.png')} />
        </View>      

        <SafeAreaView style={styles.containerAreaView}>
          {refreshing ? <ActivityIndicator /> : null}
          <FlatList 
            data={data}
            renderItem={({ item }) => 

            <BeerListButton
            style={styles.item}
            onPress={() => 
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'BeerDetailScreen',
                  params: {
                    product_id: item.id,
                  },
                }),        
              )}
            text={item.brand}
            />
            // <Text style={styles.item}>{item.brand}</Text>
            
            }
            keyExtractor={(item) => item.id}
            enableEmptySections={true}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={loadUserData} />
            }            
          />
        </SafeAreaView>

        <View style={styles.header}>
        </View>

      </View>

      {/*
      Button add beer
      <View style={styles.center}>  
        <AddByFieldsButton onPress={() => navigation.navigate("AddBeerScreen")}>         
        </AddByFieldsButton>
      </View>  
      */}
    </View>
  );
};

export default BeerListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaf3",
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  item: {
    padding: 8,
    fontSize: 16,
    marginTop: 0,
    marginBottom: 20,
    borderColor: '#78a02e',
    borderWidth: 2,
    borderRadius: 0,
    textAlign: 'center',
    textTransform: 'uppercase' 
    
  },
  containerAreaView: {
    padding: 0,
    flex: 1,
    width: '50%',
    justifyContent: 'flex-start'
  },
  containerTitle: {
    flexDirection: 'row',
    marginBottom: 30
  },
  ipapo: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
  }

});
