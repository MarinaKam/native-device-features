import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from '../components/Buttons';
import { AddPlace, AllPlaces } from '../screens';
import { globalStyles } from '../theme';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: globalStyles.colors.secondary.light,
        },
        headerTintColor: globalStyles.colors.grey['900'],
        contentStyle: {
          backgroundColor: globalStyles.colors.secondary['50']
        }
      }}
    >
      <Stack.Screen
        name="AllPlaces"
        component={AllPlaces}
        options={({ navigation }) => ({
          title: 'Your Favorite Places',
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              color={tintColor}
              size={24}
              onPress={() => navigation.navigate('AddPlace')}
            />
          )
        })}
      />
      <Stack.Screen
        name="AddPlace"
        component={AddPlace}
        options={{
          title: 'Add a new Place'
        }}
      />
    </Stack.Navigator>
  );
};
