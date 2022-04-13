import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import {
  ViewTextStyles,
  UsingState,
  TextInputs,
  ListsAndScrollView,
  FlatListTouchableComponent,
  ToDo
} from './assets/pages';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
