import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../../components/TheReviews/Card';

import globalStyles from '../../styles/global';

const ReviewDetails = ({ route: { params } }: any) => {
  const { title, rating, synopsis, source } = params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Image source={source} style={styles.image} />
        <Text style={globalStyles.titleText}>{title}</Text>
        <View style={styles.synopsisContainer}>
          <Text style={globalStyles.titleText}>Synopsis:</Text>
          <Text style={globalStyles.paragraph}>{synopsis}</Text>
        </View>
        <View>
          <Text style={globalStyles.titleText}>The Reviewers' Rating:</Text>
          <View style={styles.ratingNumbersContainer}>
            <Text style={globalStyles.paragraph}>
              <Text style={globalStyles.titleText}>{rating}</Text> stars (from
              69 votes)
            </Text>
            <Text style={styles.starContainer}>
              {Array.from({ length: rating }).map((_, id) => {
                return (
                  /* @ts-expect-error */
                  <MaterialIcons
                    key={id}
                    name="star"
                    size={18}
                    color="#FFA800"
                  />
                );
              })}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    marginBottom: 10
  },
  synopsisContainer: {
    marginVertical: 15
  },
  ratingNumbersContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starContainer: {
    marginLeft: 5
  }
});
