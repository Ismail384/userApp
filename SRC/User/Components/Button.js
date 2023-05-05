import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

function Button(props) {
  const { onPress, title ,style } = props;

  
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text  style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width:'60%',
        backgroundColor:'green',
        marginTop:20,
        marginLeft:50,
        borderRadius:10,
        padding:10,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
  },
  text: {
    marginLeft:30,
    fontSize:20,
    fontWeight:'bold',
        
  },
});