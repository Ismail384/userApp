
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import HomeMap from '../Components/HomeMap';
import Button from '../Components/Button'


const HomeScreen= ({navigation})=>{

    return(
      <View style={styles.container}>
        <View style={styles.box1}>
       <HomeMap   /> 
        </View>
        <View style={styles.box2}>
             
                <Button style={styles.inputHomeScreen} 
                title="Where to?" 
                onPress={()=>{navigation.navigate('searchScreen')}}/>
              
        </View>
            
      </View>
        
      
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        
    
      
    },
    box1:{
      flex:0.7,
      backgroundColor:'F5f5f5'
        },

    box2:{
      flex:0.3,
      backgroundColor:'grey'
    },

    inputHomeScreen:{
      padding:10,
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      backgroundColor:'white'

    }
  });