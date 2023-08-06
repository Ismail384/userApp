
// import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import Input from '../Components/Inputs';


// const Destination= props =>{

//     return(
//         <View style={styles.container}>
//             <View style={styles.destinationInput}>
               
//               <Input  name=" user location" ></Input>
//               <Input  name="Enter destination"></Input>
//              </View>

           
//         </View>
        
//     )
// }

// export default Destination;
// const styles = StyleSheet.create({
//     container: {
//       width:'100%',
//       height:'100%',
//       backgroundColor: '#D9D9D9',
     
    
//     },
//     destinationInput:{
//         width:'90%',
        
//     }
   
   
    
//   });

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getDistance } from 'geolib';


const Destination = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');

  const [locationCoordinates, setLocationCoordinates] = useState('');
  const [destinationCoordinates, setDestinationCoordinates] = useState('');
  const [totalDistance, setTotalDistance] = useState(0);


  const handleLocation=(text, details)=>{
    setLocation(text);
   // setLocationCoordinates(coordinates)
   if (details && details.geometry && details.geometry.location) {
    const { lat, lng } = details.geometry.location;
    setLocationCoordinates({ latitude: lat, longitude: lng });
    
  }

  else{
    setLocationCoordinates('false')
  }
  }

  const handleDestination=(text, details)=>{
    setDestination(text);

    if (details && details.geometry && details.geometry.location) {
      const { lat, lng } = details.geometry.location;
      setDestinationCoordinates({ latitude: lat, longitude: lng });
      
    }
  
    else{
      setDestinationCoordinates('false')
    }
  }

  const handlePress = () => {
    if (location && destination) {
      const distance = getDistance(
        locationCoordinates,
        destinationCoordinates
      );
  
      const distanceInKm = distance / 1000; // Convert distance to kilometers
      const totalCost = distanceInKm * 500; // Calculate total cost (assuming 500 sh per kilometer)
    console.log(totalCost)
      setTotalDistance(totalCost);
  console.log(totalDistance)
      navigation.navigate('SearchResult', {
        userLocation: {
          description: location,
          coordinates: locationCoordinates,
        },
        userDestination: {
          description: destination,
          coordinates: destinationCoordinates,
        },
        totalDistance: totalCost, // Pass the total distance to the SearchResult screen
      });
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your location:</Text>
      <GooglePlacesAutocomplete

      fetchDetails={true}
  placeholder="Enter your location"
  onPress={(data, details = null) => {
    handleLocation(data.description,details);
  }}
  query={{ key: "AIzaSyB-7xpHozlQjrujfO3tDvYtIHJAy8uiLjU"  }}
  styles={{
    container: {
      flex: 0,
      width: '98%',
    },
    textInputContainer: {
      backgroundColor: '#fff',
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderRadius:10
    },
    textInput: {
      height: 50,
      fontSize: 16,
      borderRadius: 5,
      paddingLeft: 10,
    },
  }}
/>

      <Text style={styles.label}>Enter your destination:</Text>
      <GooglePlacesAutocomplete

fetchDetails={true}
  placeholder="Enter your Destination"
  onPress={(data, details = null) => {
    handleDestination(data.description,details);
  }} //what is the use of seeting details to nulll here? and what does values does it contain in GooglePlaces Autocomplete
  query={{ key:"AIzaSyB-7xpHozlQjrujfO3tDvYtIHJAy8uiLjU" }}
  styles={{
    container: {
      flex: 0,
      width: '98%',
    },
    textInputContainer: {
      backgroundColor: '#fff',
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderRadius:10
    },
    textInput: {
      height: 50,
      fontSize: 16,
      borderRadius: 5,
      paddingLeft: 10,
    },
  }}
/>

      <Button
        title="Next"
        onPress={handlePress}
        disabled={!location || !destination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop:30,
    backgroundColor:'#D9D9D9'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '80%',
    borderRadius: 5,
    fontSize: 16,
  },
});

export default Destination;

