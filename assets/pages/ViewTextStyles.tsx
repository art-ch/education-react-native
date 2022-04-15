import { StyleSheet, View, Text } from 'react-native';

const ViewTextStyles = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.boldText}>Hello World!</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.boldText}>
        Lorem ipsum <Text>Child Text</Text> dolor sit amet.
      </Text>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Text>Lorem ipsum dolor sit amet.</Text>
    </View>
  </View>
);

export default ViewTextStyles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
