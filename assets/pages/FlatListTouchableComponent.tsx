import { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

const FlatListTouchableComponent = () => {
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

  const pressHandler = (id: string) =>
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={({ id }) => id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FlatListTouchableComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    marginTop: 24,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'seagreen'
  }
});
