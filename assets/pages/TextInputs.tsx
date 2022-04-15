import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextInputs = () => {
  const [nickname, setNickname] = useState<string>('Charlie');
  const [age, setAge] = useState<number>(30);
  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="E.g. John Doe"
        onChangeText={(value) => setNickname(value)}
      />
      <Text>Enter Age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="E.g. 69"
        onChangeText={(value) => setAge(Number(value))}
      />
      <Text>
        Name: {nickname}, Age: {age}
      </Text>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
