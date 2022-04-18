import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import globalStyles from '../styles/global';

const ListsAndScrollView = () => {
  const [people, setPeople] = useState([
    {
      id: '1',
      name: 'Shawn Mendes'
    },
    {
      id: '2',
      name: 'Shawn Mendez'
    },
    {
      id: '3',
      name: 'Shawn Mendoza'
    },
    {
      id: '4',
      name: 'Shawn Mandose'
    },
    {
      id: '5',
      name: 'Shawn Doseman'
    },
    {
      id: '6',
      name: 'Shawn Sednem'
    },
    {
      id: '7',
      name: 'Shawn Desune'
    },
    {
      id: '8',
      name: 'Shawn Mesned'
    },
    {
      id: '9',
      name: 'Shawn Desnem'
    },
    {
      id: '10',
      name: 'Shawn Disney'
    }
  ]);
  return (
    <View style={globalStyles.tutorialBox}>
      <ScrollView>
        {people.map((person) => {
          return (
            <View key={person.id}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
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
