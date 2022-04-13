import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

type AddTodoProps = {
  submitHandler: Function;
};

const AddTodo = ({ submitHandler }: AddTodoProps) => {
  const [text, setText] = useState('');

  const changeHandler = (value: string) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}
      />
      <Button
        color="#f25c54"
        title="Add Task"
        onPress={() => submitHandler(text)}
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});
