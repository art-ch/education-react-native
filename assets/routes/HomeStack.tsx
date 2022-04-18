import { createStackNavigator } from '@react-navigation/stack';
import { Home, ReviewDetails } from '../pages/TheReviews';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    /* @ts-expect-error */
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#82C9A9'
          }
        }}
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
