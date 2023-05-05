import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import { TextInput } from "react-native";

const Input= ({name, value, onChangeText, style, onPress}) =>{

    return(
        <View style={styles.container}>
       <TextInput style={[styles.TextInputBody, style]} 
        placeholder={name} 
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
       
       />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width:'60%',
        
    
      
    },

    TextInputBody:{
        width:'100%',
       backgroundColor:'#f5f5f5',
       marginTop:20,
       marginLeft:50,
       //borderRadius:10,
       padding:5,
       textAlign:'left',
       

    }
  });