import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import {Appbar} from "./src/Appbar";
import TextBar from './src/TextBar';
import { UserList } from './src/UserList';

export default function App() {
 
 
  return (
    <View style={styles.container}>
    
    <TextBar/>
    <UserList/>
     <Appbar/>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor:"#ffffff",
    flex : 1
  
  },
});
