import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('')

  const [age, setAge] = useState('')

  const getAge = async() => {
const result = await axios.get(`https://api.agify.io/?name=${name}`)
const {data} = result || {}
setAge(data.age)
  }

  useEffect(()=> {
 if(name.length > 3 ){
  getAge()
 }
  },[name])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {'\n'} Lolocar</Text>
     
     <View style= {styles.viewInput}>
      <Text style={styles.name}>What's your name?</Text>
     <TextInput style={styles.input} 
     placeholder= "abc"
     placeholderTextColor="white"
     onChangeText={setName}
     />
{name.length > 3 &&  <Text style={styles.nameText}>Hola, {name} tiene {age} años de edad</Text>}
     
     </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    paddingTop: 20
    // justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center'
  },
  viewInput: {
    flex:  1,
    paddingTop: 20,
    width: '100%',
 backgroundColor: 'black'
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    paddingLeft: 7
  },
  input: {
    width: '95%',
    height: 30,
    marginHorizontal: 10,
    backgroundColor: 'gray',
    paddingLeft: 5,
    borderRadius: 2,
    color: 'white1234'
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginLeft: 10,
    marginTop: 20
  }
});
