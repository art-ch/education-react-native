import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import {
  ViewTextStyles,
  UsingState,
  TextInputs,
  ListsAndScrollView,
  FlatListTouchableComponent,
  ToDo,
  FlexboxPlayground
} from './assets/pages';

import { Home, About, ReviewDetails } from './assets/pages/TheReviews';
import Navigator from './assets/routes/HomeStack';

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
