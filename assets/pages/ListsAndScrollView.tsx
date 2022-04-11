import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const ListsAndScrollView = () => {
  const [people, setPeople] = useState([
    {
      id: '1',
      name: 'Shawn'
    },
    {
      id: '2',
      name: 'Shawn'
    },
    {
      id: '3',
      name: 'Shawn'
    },
    {
      id: '4',
      name: 'Shawn'
    },
    {
      id: '5',
      name: 'Shawn'
    },
    {
      id: '6',
      name: 'Shawn'
    },
    {
      id: '7',
      name: 'Shawn'
    },
    {
      id: '8',
      name: 'Shawn'
    },
    {
      id: '9',
      name: 'Shawn'
    },
    {
      id: '10',
      name: 'Shawn'
    }
  ]);
  return (
    <>
      <ScrollView>
        {people.map((person) => {
          return (
            <View key={person.id}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default ListsAndScrollView;

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'seagreen'
  }
});
