import React,{useState} from 'react'
import HomeMap from '../Components/HomeMap'
import { View , Text, StyleSheet,Image, Pressable, ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AmbulanceType from '../Components/AmbulanceType'
//import Geolocation from '@react-native-community/geolocation';

import { ref, set,get, onValue,push} from "firebase/database";
import { db } from '../../firebase';
import { useNavigation, useRoute } from '@react-navigation/native'



function SearchResult() {
  
  // const {userRequestData}=route.params;
  // const location=userRequestData.location;
  // const destination=userRequestData.destination;
 // const [isLoading, setIsLoading] = useState(false);

  const route=useRoute();
  const navigation=useNavigation();

  requestorLocation=route.params.userLocation.description;
  requestorDestination=route.params.userDestination.description;

  /*
- create a function to access the  the Collection of Online Drivers
- get their latitudes and longitudes. 
- for each Lat and Long , calculate its proximity to the user lat and Long
- send the request to the closest driver


  */

  requestorLocationCoordinate=route.params.userLocation.coordinates;
  requestorDestinationCoordinate=route.params.userDestination.coordinates;
  
   locationLatitude = route.params.userLocation.coordinates.latitude;
   locationLongitude=route.params.userLocation.coordinates.longitude;

   destinationLatitude=requestorDestinationCoordinate.latitude;
   destinationLongitude=requestorDestinationCoordinate.longitude;

   

   

  const sendRequest=(requestorLocation,requestorDestination, 
    user_location_latitude, user_location_longitude,user_destination_latitude,
    user_destination_longitude)=>{

      
   // setIsLoading(true);
    //const newRequestRef = push(ref(db, 'requestCollection')); generate new request ID for each request
    //const requestId = newRequestRef.key; assign it to this variable

    const newRequestRef = (ref(db, 'requestCollection'));

    const time= new Date();
    
  
    const requestData = {
    //  id: requestId,
    user_location_longitude:locationLongitude ,
     user_location_latitude:locationLatitude ,
    user_destination_longitude: destinationLongitude ,
    user_destination_latitude:destinationLatitude ,
      user_location: requestorLocation,
      user_destination: requestorDestination,
      current_datetime: time
    };
  
    set(newRequestRef, requestData) //send the new request to the database

    navigation.navigate('RequestProcessing',{ isLoading:true});


    
    // .then(() => {
      

    //   const updatedNewRequestRef = (ref(db, 'requestCollection')); //get a new instance of this collection
    //   onValue(updatedNewRequestRef, (snapshot) => {
    //     const data = snapshot.val();
    //     if (data && data.accepted) {
    //       //setIsAccepted(true);
    //       setIsLoading(false);
    //     }
     
    //   })
      
    // })
    // .then(() => {
    //   // Update successful
    // })
    // .catch((error) => {
    //   // Handle any errors that occurred while sending the request
    // })
    // .finally(() => {
    //   setIsLoading(false); // Set isLoading to false when the request process is complete
    // });

    //alert('requestor details captured')
  }
 

  return (
    <SafeAreaView style={styles.container}>
    
       <HomeMap style={styles.map} />

       <View style={styles.request_container}>

        <Pressable >

      <View style={styles.requestRowContainer}>
         
       <Image 
    style={styles.image}
        source= {require('../../../assets/ambulance.jpg')}
    />
    <View style={styles.middleContainer}>
    <Text  style={styles.type}>
      BLS
     </Text>
      <Text  style={styles.time}>
        8 minutes
      
     </Text>

     </View>

     <View style={styles.leftContainer}>
        <Text> 
          Icon 
        
        </Text>

        <Text style={styles.price} >
        Ksh 400
        </Text>
      </View>
      </View> 
      </Pressable> 

      <Pressable  style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}
      onPress={()=>{sendRequest(requestorLocation,
        requestorDestination,
        locationLatitude,
        locationLongitude,
        destinationLatitude,
        destinationLongitude)}}
      
      >
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Ambulance
        </Text>
       
      </Pressable>

      

         </View>

        
     
    </SafeAreaView>
   
  )
}

export default SearchResult


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      height:400,
      flex:0.1
      
    },
    request_container:{
     
      flex:0.9,
     
      
     
      
    } ,

    requestRowContainer:{
      marginTop:10,
      backgroundColor:'white',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:40

    },
    image:{
      marginLeft:10,
      marginTop:10,
      height:60,
      width:50,
      resizeMode:'contain'
  },
  middleContainer:{
    padding:5,
    marginTop:10,
    fontSize:20,
    fontWeight:700,
    backgroundColor:'white',
    height:80
    
  }
    
  });