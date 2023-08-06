
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import {View, StyleSheet, Text, KeyboardAvoidingView,SafeAreaView} from 'react-native';
import Input from "../Components/Inputs";
import Button from "../Components/Button";

import { ref, set,get, onValue,push} from "firebase/database";
import { db } from '../../firebase';


const SignUp= ({navigation}) =>{

    const[user_email, setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

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

        // const newUser = push(ref(db, 'ambulanceAppUsers'));

        if(!user_email && !password && !phoneNumber){

       
          alert('enter your details')
           navigation.navigate('login')
        }
        else{
          set(ref(db, 'ambulanceAppUsers/' +  phoneNumber), {
            user_email: user_email,
            password: password,
            phone_number:phoneNumber
            
          })
          .then(()=>{
            alert('user registered successfully')
            navigation.navigate('login')
          })
          .catch((error)=>{
            alert(error)
          })
        }

       

     
          
}

    return(
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView>
            <View>
            <Text style={styles.createText}> Sign Up </Text>
            </View>
            <View>
              <View style={styles.inputContainer}>

                
              <MaterialCommunityIcons name="email-outline" size={24} color="black" />
            <Input 
                name=" email address"
                onChangeText={setEmail}
                value={user_email}
                isPassword={false}
                style={styles.input}
               
               
             />

          </View>   

          <View style={styles.inputContainer}>

          <FontAwesome name="phone" size={24} color="black" />
              <Input
            name=" phoneNumber"
            onChangeText={setPhoneNumber}
             value={phoneNumber}
             isPassword={false}
             style={styles.input}
             />

                </View>

                <View style={styles.inputContainer}>

                <Ionicons name="key-outline" size={24} color="black" />
            <Input
            name=" password"
            onChangeText={setPassword}
             value={password}
             isPassword={true}
             style={styles.input}
             />
             
             </View>
           
           {/* <Input name=" phone number" />
            <Input name=" some data" />
            <Input name=" some other data" />
            */}
           

            </View>
            <View>
              <Button title="Register"  onPress={registerUser}/>
            </View>

            </KeyboardAvoidingView>
         
        </SafeAreaView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        position:'absolute',
      width:'85%',
      height:'75%',
      marginTop:70,
      marginLeft:30,
      
    
      backgroundColor: '#ffffff',
     
    
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      width:'90%',
      padding:8,
      paddingHorizontal: 10,
      marginTop:10,
      marginLeft:15
    },

    input: {
      flex: 1,
      marginLeft: 10,
    },
    createText:{
        marginLeft:50,
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20
        

    },
    registerButton:{
      width:'90%',
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