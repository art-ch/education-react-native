import { createStackNavigator } from '@react-navigation/stack';
import { Home, ReviewDetails } from '../pages/TheReviews';
import { Header } from '../components/TheReviews';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    /* @ts-expect-error */
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} />,
          headerStyle: {
            backgroundColor: '#82C9A9'
          }
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          headerStyle: {
            backgroundColor: '#E4C2EA'
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
