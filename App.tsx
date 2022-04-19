import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import Navigator from './assets/routes/RootDrawerNavigator';

const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
