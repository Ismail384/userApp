

import React, { useState } from "react";
import {View, StyleSheet, Text, Alert} from 'react-native';
import Input from "../Components/Inputs";
import Button from "../Components/Button";
//import { data } from "jquery";

const SignUp= ({navigation}) =>{

    const[user_email, setEmail]=useState('');
    const [password, setPassword] = useState('');

    const registerUser=()=>{

        // fetch('http://192.168.0.114:80/ambulance_app_apis/register.php', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
            
        //       user_email: user_email,
        //       user_password:password
        //     })
        //   })
        //   .then(response => response.text())
        //   .then(data => {
        //     console.log(data);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
          
           navigation.navigate('login')

     
          
}

    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.createText}> Create Account </Text>
            </View>
            <View>
                
            <Input 
                name=" email address"
                onChangeText={setEmail}
                value={user_email}
               
               
             />
            <Input
            name=" password"
            onChangeText={setPassword}
             value={password}
             />
            
           
           {/* <Input name=" phone number" />
            <Input name=" some data" />
            <Input name=" some other data" />
            */}
           

            </View>
            <View>
              <Button title="Register"  onPress={registerUser}/>
            </View>
         
        </View>
    )
}

export default SignUp;

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
    createText:{
        marginLeft:50,
        fontSize:20,
        fontWeight:'bold',
        

    },
    registerButton:{
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