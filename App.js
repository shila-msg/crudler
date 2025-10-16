import { navigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MouleListScreen from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';   
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
const Stack = createNativeStackNavigator();

export const App = () => {
  // Installations....
  // State....
  // Handlers...
  // View...
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='ModuleListScreen'
       screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
       }}
       >
        
        <Stack.Screen
          name='ModuleListScreen'
          component={MouleListScreen}
          options={{ title: 'List modules' }}
        />

        <Stack.Screen
          name='ModuleAddScreen'
          component={MouleListScreen}
          options={{ title: 'Add module' }}
        />

        <Stack.Screen
          name='ModuleViewScreen'
          component={MouleListScreen}
          options={{ title: 'view module' }}
        />

        <Stack.Screen
          name='ModuleModifyScreen'
          component={MouleListScreen}
          options={{ title: 'Modify module' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;

