import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { Header, AddTodo, TodoItem } from '../components/Todo';

export type TodoItemSchema = { id: string; text: string };

const ToDo = () => {
  const [todos, setTodos] = useState<TodoItemSchema[]>([
    { id: '1', text: 'Work' },
    { id: '2', text: 'Obligations' },
    { id: '3', text: 'Piano' },
    { id: '4', text: 'ATS' },
    { id: '5', text: 'Anime' }
  ]);

  const pressHandler = (id: string) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [
        { id: Math.random().toString(), text },
        ...prevTodos
      ]);
    } else {
      Alert.alert('OOPS', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: () => {} }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={({ id }) => id}
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
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
