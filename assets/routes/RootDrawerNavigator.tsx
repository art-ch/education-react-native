import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  ViewTextStyles,
  UsingState,
  TextInputs,
  ListsAndScrollView,
  FlatListTouchableComponent,
  ToDo,
  FlexboxPlayground
} from '../pages';
import { Home, About } from '../pages/TheReviews';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    /* @ts-expect-error */
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#82C9A9'
          }
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerStyle: {
            backgroundColor: '#E4C2EA'
          }
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigator;
