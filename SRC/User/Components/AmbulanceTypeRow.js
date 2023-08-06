
import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'


function AmbulanceTypeRow() {
  return (
    <View style={styles.container}>
    <Image 
    style={styles.image}
        source= {require('../../../assets/ambulance.jpg')}
    />
    <View style={styles.middleContainer}>
    <Text
    style={styles.type}
    BLS
     />
      <Text
    style={styles.time}
      minutes={8}
     />

     </View>

     <View style={styles.leftContainer}>
        <Text Icon 
        
        />

        <Text style={styles.price} 
         price={300}
        />

     </View>
    </View>
  )
}

export default AmbulanceTypeRow

const styles = StyleSheet.create({
    // container: {
        
    //   display:'flex',
    //    flexDirection:'row',
    //   color:'black'
    // },

    image:{
        height:50,
        width:50,
        resizeMode:'contain'
    },
    middleContainer:{
        
    },

    leftContainer:{
        
    }
   
  });