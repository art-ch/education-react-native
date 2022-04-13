import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

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
    setTodos((prevTodos) => [
      { id: Math.random().toString(), text },
      ...prevTodos
    ]);
  };

  return (
    <>
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
    </>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
