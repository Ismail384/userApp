
import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import Input from "../Components/Inputs";
import Button from "../Components/Button";

const Login= ({navigation}) =>{

    const LoginUser=()=>{
       //alert('user logged in successfully');
       navigation.navigate('HomeScreen')
    }

    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.loginText}> Log In Your Account </Text>
            </View>
            <View>
            <Input name=" email address" />
            <Input name=" password" />
            </View>
            <View>
            <Button title="Log in"  onPress={LoginUser}/>
            </View>
         
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
      width:'80%',
      height:'75%',
      marginTop:70,
      marginLeft:30,
      
    
      backgroundColor: '#D9D9D9',
     
    
    },
    loginText:{
        marginLeft:50,
        fontSize:20,
        fontWeight:'bold',
        

    },
    submitButton:{
        width:'60%',
        backgroundColor:'green',
        marginTop:20,
        marginLeft:50,
        borderRadius:10,
        padding:10,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
    }
  });