import { Text, View, StyleSheet, Pressable, Modal, Image, TextInput, Button } from 'react-native' ;
import {useState, useContext, useEffect} from 'react';
import axios from "axios"
import BarcodeScannerButton from '../components/BarcodeScannerButton';
import { BarCodeScanner } from 'expo-barcode-scanner';

function AddBeerScreen(props) {

  const [newBeer, setNewBeer] = useState('');
  
  function camera() {
    console.log("Camera pressed");   
  }

  function goalInputHandler(enteredText) {
    setNewBeer(enteredText);
  }

  function addGoalHandler() {
    console.log('Pressed');
    fetchData();
  }

  const fetchData = () => {
    
    const beerData = {
      'name' : newBeer
    }

    axios.post(`${localhost}/beers`, beerData)

    .then(response => {    
      console.log(response.status, response.data)
    })       
    .catch(error => {
      console.log(error.response)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>NEW BEER</Text>
        
          <View style={styles.inputContainer}>
            <Image 
              style={styles.image} 
              source={require('../assets/favicon.png')} 
            />
            <TextInput 
              style={styles.textInput} 
              placeholder='Register a new beer' 
              onChangeText={goalInputHandler}
              value={newBeer}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='addGoal' onPress={addGoalHandler} color="#b180f0" />
              </View>
              <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
              </View>
            </View>
          </View>

          <BarcodeScannerButton onPress={() => navigation.navigate("CameraScreen")}>         
          </BarcodeScannerButton>

          {/* Added permissions */}
          {/* <uses-permission android:name="android.permission.CAMERA" /> */}

          {/* { 
            newBeer.map((beer) => {
              return (
                <View>
                  <Text style={styles.item}>{beer}</Text>
                </View>
              );
            })
          } */}
      </View>
    </View>
  );
};

export default AddBeerScreen;

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
  textInput: {
    backgroundColor: "#ffffff",
  },
  item: {

  }
});
