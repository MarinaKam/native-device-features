import { useContext, useState } from 'react';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { View, StyleSheet, Alert } from 'react-native';

import { GlobalContext } from '../../store/GlobalProvider';
import { globalStyles } from '../../theme';
import { Button } from '../Buttons';
import { Map } from '../Map';

export const LocationPicker = () => {
  const { theme } = useContext(GlobalContext);
  const [locationPermissionInfo, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = useState(null);

  const verifyPermission = async () => {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionRes = await requestPermission();

      return permissionRes.granted;
    }

    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions!', 'You need to grant location permissions to use this app.');

      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      setLocation(null);
      return;
    }

    const pickedLocation = await getCurrentPositionAsync();

    setLocation({
      lat: pickedLocation?.coords?.latitude,
      lng: pickedLocation?.coords?.longitude,
    });
  };

  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={[styles.mapPreview, { backgroundColor: globalStyles.colors[theme][100] }]}>
        <Map coordinates={[location]} />
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
  button: {
    width: '48%',
  },
  buttonsGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapPreview: {
    alignItems: 'center',
    borderRadius: globalStyles.borderRadius,
    height: 200,
    justifyContent: 'center',
    marginVertical: 8,
    overflow: 'hidden',
    width: '100%',
  }
});
