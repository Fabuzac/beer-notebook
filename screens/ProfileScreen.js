import { Text, View, StyleSheet, Pressable, Button } from 'react-native' ;

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>ProfileScreen</Text>
        <View style={styles.center}>
          <Button
            title="Go to Iso Screen"
            onPress={() => navigation.navigate("IsoScreen")}
          />        
        </View>
        <Text>Autem tenetur incidunt praesentium neque qui recusandae. Dolore qui nam quo esse mollitia. Dolores laboriosam beatae in est aperiam eum maxime. Rerum aut quis delectus voluptatem non eos soluta. Dolores perspiciatis labore dignissimos harum repellat corporis vel. Impedit quia officia ut quibusdam hic atque dolor alias.</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaf3",
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
