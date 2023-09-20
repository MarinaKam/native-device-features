import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddPlace, AllPlaces } from '../screens';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllPlaces" component={AllPlaces} />
      <Stack.Screen name="AddPlace" component={AddPlace} />
    </Stack.Navigator>
  );
};
