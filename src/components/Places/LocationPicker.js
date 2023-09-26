import { View, StyleSheet } from 'react-native';
import { Button } from '../Buttons';
import { Text } from '../Text';

export const LocationPicker = () => {
  const getLocationHandler = () => {};
  const pickOnMapHandler = () => {};

  return (
    <View>
      <View>
        <Text>Preview Map</Text>
      </View>

      <Text>LocationPicker</Text>

      <View style={styles.buttonGroup}>
        <Button style={styles.button} icon="location" onPress={getLocationHandler}>
          Locate the User
        </Button>

        <Button style={styles.button} icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
  },
});
