import { View, StyleSheet } from 'react-native';
import { globalStyles, themeColor } from '../../theme';
import { Button } from '../Buttons';
import { Text } from '../Text';

export const LocationPicker = () => {
  const getLocationHandler = () => {};
  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}>
        <Text>Preview Map</Text>
      </View>

      <View style={styles.buttonsGroup}>
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
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.colors[themeColor][100],
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
  },
});
