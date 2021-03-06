import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'homework', key: '1' },
    { text: 'practice', key: '2' },
    { text: 'groceries', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  };

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('Oops!', 'Todos must be at least 1 character long.', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    margin: 40,
  },
  list: {
    marginTop: 20,
  },
});
