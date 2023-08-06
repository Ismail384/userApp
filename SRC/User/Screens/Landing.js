
import React from "react";
import {View, StyleSheet, Text, Image,SafeAreaView} from 'react-native';
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";


const Landing= () =>{

    const navigation=useNavigation();


    const signUPUser=()=>{
        //alert('user logged in successfully');
        navigation.navigate('SignUp');
       // navigation.dispatch(StackActions.popToTop());
     }

    return(

        
        <View style={styles.container}>
            <View>
           <Image
            style={styles.image}
            source={require('../../../assets/ambulance.jpg')} 
            resizeMode='center'
            
            />
            </View>
            <View>
            <Text style={styles.landingText}> WELCOME TO N-AMBULANCE </Text>
            </View>
            <View>
              <Button  title="Get started" onPress={signUPUser}/>
            </View>
         
        </View>
        
    )
}

export default Landing;

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
    image:{
        width:'100%',
        height:200
    },
    landingText:{
        marginLeft:50,
        fontSize:25,
        fontWeight:'bold',
        

    },
    landingButton:{
        width:'55%',
        backgroundColor:'green',
        marginTop:20,
        marginLeft:50,
        borderRadius:10,
        padding:8,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
    }
  });