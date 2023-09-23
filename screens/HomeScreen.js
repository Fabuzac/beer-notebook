import { Text, View, StyleSheet, Button, Pressable } from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import AddByScanButton from '../components/AddByScanButton';
import AddByFieldsButton from '../components/AddByFieldsButton';

// Page home de l'application
function Home({ navigation }) {
  
  return (
    
    <View style={styles.container}>

      {/* <View style={styles.header}>       
        <View style={styles.borderTitle}>
          <Text style={styles.title}>Beer Notebook</Text>
          <Icon name="beer" size={30} color="#ffffff" />
        </View>      
        
      </View> */}

      <View style={styles.containerDashboard}>
        <View style={styles.borderDashboard}>
          <Text style={styles.title}>Dashboard</Text>
          <Icon name="user" size={20} color="#ffffff" />
        </View>  

        {/* CONTAINER */}
        <View style={styles.containerColumn}>
          <Text>Comment souhaitez vous ajouter une biere?</Text>
          {/* COL 1 */}
          <View style={styles.item1}>
            
            <AddByScanButton onPress={() => navigation.navigate("CameraScreen")} />         

            </View>
          {/* COL 2 */}
          <View style={styles.item2}>

            <AddByFieldsButton onPress={() => navigation.navigate("AddBeerScreen")} />         

          </View>

          
        </View>
      </View>  
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    margin: 9,
    borderRadius: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "normal",
    color: "#ffffff",
    paddingHorizontal: 20,
  },
  borderTitle: {
    backgroundColor: "#f9322c",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginBottom: 80,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  footer: {
    flexDirection: "row",
    flex: 0,
    backgroundColor: "#FFC107",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 1,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }, 
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  button: {

  },
  buttonPressed: {
    backgroundColor: "#ccc",
    opacity: 0.5,
  },
  pressMe: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fefefe",
  },
  buttonPressedMe: {
    backgroundColor: "#666",
  },
  containerDashboard: {
    flex: 4,
    backgroundColor: "#eaeaf3",
    margin: 15,
    borderRadius: 12,
  },
  col2: {
    width: "60%",
    
  },
  center: { 
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  borderDashboard: {
    backgroundColor: "#78a02e",
    flexDirection: "row",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 30
  },
  containerColumn: { 
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  item1: {
    width: '50%',
  },
  item2: {
    width: '50%',
  },
  
});