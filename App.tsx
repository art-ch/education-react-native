import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import {
  ViewTextStyles,
  UsingState,
  TextInputs,
  ListsAndScrollView
} from './assets/pages';

export default function App() {
  return (
    <View style={styles.container}>
      <ListsAndScrollView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center'
  }
});
