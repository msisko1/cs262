import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput, FlatList
} from 'react-native';

export default function App() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(0);
  const [birthdays, setBirthdays] = useState([]);

  const clickHandler = () => {
    setAge(age + 1);
    setBirthdays(birthdays.concat({ key: (age + 1).toString() }));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter Name'
        placeholderTextColor='#333'
        onChangeText={(val) => setName(val)} />

      <Text style={styles.baseText}>{name} is {age} years old.</Text>
      <View style={styles.buttonContainer}>
        <Button title='Birthday' color='#F0F' onPress={clickHandler} />
      </View>

      <FlatList
        data={birthdays}
        renderItem={({ item }) => <Text style={styles.baseText}>{item.key}</Text>}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  baseText: {
    color: '#FFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
    alignItems: 'center',
    textAlignVertical: "top",
  },

  buttonContainer: {
    margin: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: '#FFF',
    color: '#FFF',
    padding: 8,
    margin: 10,
    width: 200,
  },

});
