import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation }: any) => {
  const openMenu = () => navigation.openDrawer();

  return (
    <View style={styles.header}>
      {/* @ts-expect-error */}
      <MaterialIcons name="menu" size={28} onPress={() => openMenu()} />
      <View>
        <Text style={styles.headerText}>Education. React Native</Text>
      </View>
      <Image source={require('../../logo.png')} style={styles.logo} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    letterSpacing: 1,
    marginLeft: 35
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 20
  }
});
