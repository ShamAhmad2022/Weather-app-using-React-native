import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function UserInput({ onSearch }) {

    const [city, setCity] = useState('');

    console.log(city);

    const handleSearch = () => {
      onSearch(city);
      setCity(''); 
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Enter a City:</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    label: {
      fontSize: 18,
      color:"white"
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'white',
      marginTop: 8,
      marginBottom: 16,
      padding: 8,
    },
  });
  