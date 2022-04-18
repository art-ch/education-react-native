import { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Button
} from 'react-native';

import globalStyles from '../../styles/global';

const Home = ({ navigation }: any) => {
  const [reviews, setReviews] = useState([
    {
      key: '1',
      title: 'Everyday Live',
      rating: 5,
      synopsis: 'Lorem ipsum dolor'
    },
    { key: '2', title: 'Katsura Da', rating: 4, synopsis: 'Lorem ipsum dolor' },
    {
      key: '3',
      title: 'Star Twinkle',
      rating: 3,
      synopsis: 'Lorem ipsum dolor'
    }
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
