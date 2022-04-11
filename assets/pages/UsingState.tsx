import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

type User = { nickname: string; age: number };

const UsingState = () => {
  const [nickname, setNickname] = useState<string>('Shaun');
  const [user, setUser] = useState<User>({ nickname: 'Mario', age: 40 });

  const clickHandler = () => {
    const newName1 = (Math.random() + 1).toString(36).substring(7);
    const newName2 = (Math.random() + 1).toString(36).substring(7);
    const newAge = Math.floor(Math.random() * 100);

    setNickname(newName1);
    setUser({ nickname: newName2, age: newAge });
  };

  return (
    <>
      <Text>My name is {nickname}</Text>
      <Text>
        His name is {user.nickname} and his age is {user.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update Status" onPress={clickHandler} />
      </View>
    </>
  );
};

export default UsingState;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20
  }
});
