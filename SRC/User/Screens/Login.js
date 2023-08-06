
import React, { useContext } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {View, StyleSheet, Text} from 'react-native';
//import { StackActions } from '@react-navigation/native';
import Input from "../Components/Inputs";
import Button from "../Components/Button";


const Login= ({navigation}) =>{

   // const {setUser}=useContext(AuthContext);

    const LoginUser=()=>{

        //const dbRef = ref(db, 'ambulanceAppUsers');
//  onValue(dbRef, snapshot => {
    // const data = snapshot.val();

    // let userFound= false;
    
    // Object.keys(data).forEach(userId => {
    //   const user = data[userId];
    //   if (user_email === user_mail && user_password ===Password) {
    //     userFound = true;

       //alert('user logged in successfully');
      navigation.navigate('HomeScreen', 'ismail');
      // navigation.dispatch(StackActions.popToTop());
    }

    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.loginText}> Log In Your Account </Text>
            </View>
            <View>
                <View style={styles.inputContainer}>

                <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                     <Input name=" email address" />

            </View>

            <View style={styles.inputContainer}>

            <Ionicons name="key-outline" size={24} color="black" />
            <Input name=" password" isPassword={true} />

            </View>
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
      
    
      backgroundColor: 'white',
     
    
    },
    loginText:{
        marginLeft:50,
        fontSize:20,
        fontWeight:'bold',
        

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