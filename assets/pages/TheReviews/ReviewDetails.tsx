import { StyleSheet, View, Text, Button } from 'react-native';

import globalStyles from '../../styles/global';

const ReviewDetails = ({ route: { params } }: any) => {
  const { title, rating, synopsis } = params;
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{synopsis}</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
