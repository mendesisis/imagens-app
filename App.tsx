
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color:'white', marginTop:60}}>APP</Text>
      <Image style={{width: '90%', height:200, borderRadius: 7}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAs2SzUnGhzeWDoA9_m9FUMxVE6_MTMB-N5Q&usqp=CAU'}}/>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={{ color:'white'}}>Click!</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    marginBottom: 65
  }
});
