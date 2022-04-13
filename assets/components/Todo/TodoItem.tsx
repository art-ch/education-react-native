import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { TodoItemSchema } from '../../pages/ToDo';

export type TodoItemProps = {
  item: TodoItemSchema;
  pressHandler: Function;
};

const TodoItem = ({ item, pressHandler }: TodoItemProps) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
});
