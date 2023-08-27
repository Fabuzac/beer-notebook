import { Text, View, StyleSheet, Pressable, Modal, Image, TextInput, Button } from 'react-native' ;
import {useState, useContext, useEffect} from 'react';
import axios from "axios"

function AddBeerScreen(props) {

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
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='addGoal' color="#b180f0" />
              </View>
              <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
              </View>
            </View>
          </View>

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
