import { View, Text, Pressable, StyleSheet } from 'react-native';

function BeerListButton({ onPress, text }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={ ({pressed}) =>
          pressed 
          ? [styles.buttonInnerContainer, styles.pressed] 
          : styles.buttonInnerContainer
        } 
        onPress={ onPress } 
        android_ripple={ {color: '#ffffff' }}        
      >
        <Text style={styles.buttonText}>{text}</Text> 
      </Pressable>
    </View>
  );
}

export default BeerListButton;

const styles = StyleSheet.create({

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 3,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#b1c156',    
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 2,
    height: 50,
    width: '100%',
    borderColor: '#b1c156',
    borderWidth: 2,
    borderRadius: 28,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
    
  }
});