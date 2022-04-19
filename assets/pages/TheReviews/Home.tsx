import { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  View,
  ImageBackground,
  Text,
  Button
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { NewEntryForm } from '../../pages/TheReviews';
import { Card } from '../../components/TheReviews';

import globalStyles from '../../styles/global';

const Home = ({ navigation }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      key: '1',
      title: 'Idol Activities',
      rating: 5,
      synopsis: 'Lorem ipsum dolor',
      source: require('../../images/book-1.jpg')
    },
    {
      key: '2',
      title: 'Twinkle Star',
      rating: 3,
      synopsis: 'Lorem ipsum dolor',
      source: require('../../images/book-2.jpg')
    },
    {
      key: '3',
      title: 'Everyday Live',
      rating: 5,
      synopsis: 'Lorem ipsum dolor',
      source: require('../../images/book-3.jpg')
    },
    {
      key: '4',
      title: `I'm not a programmer, I'm Katsura`,
      rating: 4,
      synopsis: 'Lorem ipsum dolor',
      source: require('../../images/book-4.jpg')
    }
  ]);

  return (
    /* @ts-expect-error */
    <ImageBackground
      source={require('../../images/book-5.jpg')}
      style={globalStyles.container}
      blurRadius={10}
    >
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          {/* @ts-expect-error */}
          <MaterialIcons
            name="close"
            size={24}
            style={styles.modalToggle}
            onPress={() => setModalOpen(false)}
          />
          <Text style={{ ...globalStyles.titleText, ...styles.homeTitle }}>
            Create New Entry
          </Text>
          <NewEntryForm />
        </View>
      </Modal>
      <Text style={{ ...globalStyles.titleText, ...styles.homeTitle }}>
        The Reviews
      </Text>
      {/* @ts-expect-error */}
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={{ ...styles.modalToggle, ...styles.modalOpen }}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalToggle: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalOpen: {
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    backgroundColor: '#f2f2f2'
  },
  modalContent: { flex: 1 },
  homeTitle: {
    color: 'black',
    alignSelf: 'center',
    marginBottom: 25,
    fontSize: 28
  }
});
