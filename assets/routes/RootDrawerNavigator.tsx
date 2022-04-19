import {
  createDrawerNavigator,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import TutorialPages from '../pages';
import { Home, About } from '../pages/TheReviews';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  const refineString = (string: string) =>
    string.replace(/([a-z])([A-Z])/g, '$1 $2');

  return (
    /* @ts-expect-error */
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false
        }}
      />
      {TutorialPages.map((page, id) => (
        <Drawer.Screen
          key={id}
          name={refineString(page.name)}
          component={page}
          options={{
            headerStyle: {
              backgroundColor: page.name === 'ToDo' ? '#540b0e' : undefined
            },
            headerTintColor: page.name === 'ToDo' ? 'white' : 'black'
          }}
        />
      ))}
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
