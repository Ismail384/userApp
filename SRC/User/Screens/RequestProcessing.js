
import React, {useState,useEffect}from 'react'
import { View , Text, StyleSheet,Image, Pressable, ActivityIndicator, Modal} from 'react-native'
import HomeMap from '../Components/HomeMap';
import { useRoute } from '@react-navigation/native';


import { ref, set,get, onValue,push,off} from "firebase/database";
import { db } from '../../firebase';

 const RequestProcessing = () => {
    const route=useRoute();
   // requestLoading= route.params.isLoading;

    const [isLoading,setIsLoading]=useState(route.params.isLoading);
    const [isModalVisible,setIsModalVisible]=useState(false);
    const [isModal1Visible,setIsModal1Visible]=useState(false);


    useEffect(() => {
        const requestRef = ref(db, 'requestCollection');
        onValue(requestRef, (snapshot) => {
          const data = snapshot.val();
          if (data && data.accepted) {
           
            setIsLoading(false);
        
            setIsModalVisible(true)
            
          }
        });
    
        return () => {
          off(requestRef); // Unsubscribe from changes when the component unmounts
        };
      }, []);

      useEffect(() => {
        const requestRef = ref(db, 'requestCollection');
        onValue(requestRef, (snapshot) => {
          const data = snapshot.val();
          if (data && data.arrival) {
           
            
        
            setIsModalVisible(false)
            setIsModal1Visible(true)
            
          }
        });
    
        return () => {
          off(requestRef); // Unsubscribe from changes when the component unmounts
        };
      }, []);
    
    



  return (
    <>

    
    


    <HomeMap />

 {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
          <Text>Searching for Nearby ambulances</Text>
        </View>
      )}

<Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.popUp}>
            <Text style={styles.TextInputBodyLocation}>YOUR DRIVER IS On THE WAY AND 3 MINUTES Away{requestorLocation}</Text>
           
          </View>
          
        </View>
      </Modal>
      <Modal visible={isModal1Visible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.popUp}>
            <Text style={styles.TextInputBodyLocation}>YOUR ambulance has Arrived{requestorLocation}</Text>

            {/* show ambulance and Driver details here */}
           
          </View>
          
        </View>
      </Modal>

    </>
  )
}

export default RequestProcessing;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      height:400,
      flex:0.1
      
    },

    loadingContainer:{
        height: 200,
        marginBottom:100
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
      },
      popUp: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        // Add any other necessary styles for the pop-up
      },
   

    
    
  });
