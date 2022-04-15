import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FlexboxPlayground = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>1</Text>
      <Text style={styles.box2}>2</Text>
      <Text style={styles.box3}>3</Text>
      <Text style={styles.box4}>4</Text>
    </View>
  );
};

export default FlexboxPlayground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  box1: {
    flex: 1,
    backgroundColor: 'seagreen',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10
  },
  box2: {
    flex: 2,
    backgroundColor: 'seagreen',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20
  },
  box3: {
    flex: 1,
    backgroundColor: 'seagreen',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 30
  },
  box4: {
    flex: 4,
    backgroundColor: 'seagreen',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 40
  }
});
