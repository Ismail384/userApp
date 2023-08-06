import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import { TextInput } from "react-native";

const Input= ({name, value, onChangeText, style, onPress,isPassword}) =>{

            const secureTextEntry=isPassword ?true :false ;    
    return(
        <View  style={style} >
       <TextInput 
        placeholder={name} 
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
        secureTextEntry={secureTextEntry}
        
        
       
       />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width:'70%',
        
    
      
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