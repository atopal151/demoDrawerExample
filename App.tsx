import { createDrawerNavigator } from '@react-navigation/drawer';
import Article from './src/Article';
import Feed from './src/Feed';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Feed'>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;