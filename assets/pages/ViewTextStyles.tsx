import { StyleSheet, View, Text } from 'react-native';

const ViewTextStyles = () => (
  <>
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
  </>
);

export default ViewTextStyles;

const styles = StyleSheet.create({
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
