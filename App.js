import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Navigation from './SRC/User/Navigation/Navigation';


export default function App() {
  return (
    
    <View style={{flex:1}}>
      
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Navigation />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
