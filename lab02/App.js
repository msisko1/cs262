
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
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Name'
        onChangeText={(val) => setName(val)} />

      <Text>{name} is {age} years old.</Text>
      <View style={styles.buttonContainer}>
        <Button title='Birthday' onPress={clickHandler} />
      </View>

      <FlatList
        data={birthdays}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    alignItems: 'center',
    textAlignVertical: "top",
  },

  buttonContainer: {
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginTop: 10,
    width: 200,
  },

});
