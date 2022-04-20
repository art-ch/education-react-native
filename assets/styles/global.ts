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
    lineHeight: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    color: 'black',
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center'
  }
});

export default globalStyles;
