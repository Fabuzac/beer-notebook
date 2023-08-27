import { View, Text, Pressable, StyleSheet } from 'react-native';

function SecondaryButton({ onPress }) {

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
        <Text style={styles.buttonText}>Go to Camera Screen</Text>
      </Pressable>
    </View>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 3,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#fbdb6c',    
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 2,
    height: 150,
    width: 150,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 28,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  }
});