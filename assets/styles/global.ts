import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  tutorialBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 24
  },
  titleText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  }
});

export default globalStyles;
