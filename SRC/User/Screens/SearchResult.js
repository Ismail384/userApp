import React from 'react'
import HomeMap from '../Components/HomeMap'
import { View , Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function SearchResult() {
  return (
    <SafeAreaView style={styles.container}>
    
       <HomeMap style={styles.map} />
         <Text >
        this is the search Result page
        </Text>
     
    </SafeAreaView>
   
  )
}

export default SearchResult


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      height:400
    },
  });