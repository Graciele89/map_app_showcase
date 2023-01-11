import { Button, View, Image, Text, StyleSheet } from 'react-native';


function Details( { route, navigation }) {
  const { marker } = route.params

  return (
    
      <View style={{ flex: 1, alignItems: 'center', marginTop: 25, backgroundColor:'#00EADC', }}>

        <Image source={{ uri: `https://picsum.photos/id/${Math.floor(Math.random() * 10)}/200/300` }}
          style={{ width: 150, height: 150, borderRadius: 400 / 2, marginBottom: 18, marginTop: 20 }} />
        <Text style={styles.text}>ID: {marker.id}</Text>
        <Text style={styles.text}>Name: {marker.name}</Text>
        <Text style={styles.text}>Gaelic Name: {marker.gaelic_name ? marker.gaelic_name : 'not available'}</Text>
        <Text style={styles.text}>Type: {marker.place_type_id}</Text>
        <Text style={styles.text}>Latitude: {marker.latitude}</Text>
        <Text style={styles.text}>Longitude: {marker.longitude}</Text>

        <Button title="Return to map" onPress={() => navigation.navigate('Home')}/>
      </View>
  
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    width: 280,
    borderColor: "#1d2cdd",
    color: "#1d2cdd",
    borderWidth: 2,
    padding: 10,
    margin: 7,
    borderRadius:5, 
  }
});

export default Details;