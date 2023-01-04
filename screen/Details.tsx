import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';


function Details(props: { route?: any; navigation?: any; }) {
  const { marker } = props.route.params

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 18 }}>
        <Image source={{ uri: `https://picsum.photos/id/${Math.floor(Math.random() * 10)}/200/300` }}
          style={{ width: 150, height: 150, borderRadius: 400 / 2, marginBottom: 18 }} />
        <Text style={styles.text}>ID: {marker.id}</Text>
        <Text style={styles.text}>Name: {marker.name}</Text>
        <Text style={styles.text}>Gaelic Name: {marker.gaelic_name ? marker.gaelic_name : 'not available'}</Text>
        <Text style={styles.text}>Type: {marker.place_type_id}</Text>
        <Text style={styles.text}>Latitude: {marker.latitude}</Text>
        <Text style={styles.text}>Longitude: {marker.longitude}</Text>

        <button title="Return to map" onProgress={() => Home}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    width: 250,
    borderColor: "#1d2cdd",
    color: "#1d2cdd",
    borderWidth: 3,
    padding: 4,
    margin: 5,
    borderRadius: 10
  }
});

export default Details;