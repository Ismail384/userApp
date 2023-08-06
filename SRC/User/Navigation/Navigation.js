
import * as React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import Landing from '../Screens/Landing';
import HomeScreen from '../Screens/HomeScreen';
import DestinationScreen from '../Screens/DestinationScreen';
import SearchResult from '../Screens/SearchResult';
import RequestProcessing from '../Screens/RequestProcessing';

// import { AuthProvider } from './AuthContext';



const Navigation = (props) => {
    const stack=createNativeStackNavigator();
    return(
      
        <View style={{ flex: 1 }}>
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={Landing} options={{headerShown:false}} />
            <stack.Screen name="login" component={Login} options={{headerShown:false}} />
            <stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
            <stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
            <stack.Screen name="searchScreen" component={DestinationScreen} options={{headerShown:false}} />
            <stack.Screen name="SearchResult" component={SearchResult} options={{headerShown:false}} />
            <stack.Screen name="RequestProcessing" component={RequestProcessing} options={{headerShown:false}} />

            </stack.Navigator>
        </NavigationContainer>
        </View>
       

    )
}

export default Navigation;