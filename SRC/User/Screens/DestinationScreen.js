
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


const Destination = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handlePress = () => {
    if (location && destination) {
      navigation.navigate('SearchResult', { location, destination });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your location:</Text>
      <GooglePlacesAutocomplete
  placeholder="Enter your location"
  onPress={setLocation}
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
  placeholder="Enter your Destination"
  onPress={setDestination}
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

