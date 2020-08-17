import React from 'react';
import { StyleSheet, View } from 'react-native';
import Headers from './Components/Header';
// import TakeInput from './Components/TakeInput';
import AddItem from './Components/additem';


export default function App() {
  

  return (
    <View style={styles.container}>

      
      <Headers />
      <AddItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  
});
