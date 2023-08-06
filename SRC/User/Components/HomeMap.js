
// import React from 'react';
// import {View, StyleSheet, Text, Image} from 'react-native';


// const HomeMap= props =>{

//     return(
//         <View>
//             {/* <View>
//                 <Image 
//                 source={require('../../../assets/ambulance.jpg')}

//                 style={{width:400, height:150}}
            
//                 />
              
//              </View> */}

           
//         </View>
        
//     )
// }

// export default HomeMap;

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const HomeMap= props => {

 // const [isMapReady,setMapReady]=useState('false');

  // const handleMapReady=()=>{
  //   setMapReady(true);
  // }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        //onMapReady={handleMapReady}
        initialRegion={{
          latitude:  -1.286389,
          longitude: 36.817223,
          latitudeDelta: 0.15, 
          longitudeDelta: 0.15, 
        }}
      >
        <Marker
          coordinate={{
            latitude: -1.286389,
            longitude: 36.817223,
          }}
        />
        <MapViewDirections
          origin={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          destination={{
            latitude: 37.79825,
            longitude: -122.4324,
          }}
          apikey={"AIzaSyB-7xpHozlQjrujfO3tDvYtIHJAy8uiLjU"   }
        />
      </MapView>

    </View>
  );
}

export default HomeMap;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
