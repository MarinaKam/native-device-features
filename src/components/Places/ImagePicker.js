import { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { globalStyles, themeColor } from '../../theme';
import { Button } from '../Buttons';
import { Text } from '../Text';

export const ImagePicker = () => {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState(null);

  const verifyPermission = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionRes = await requestPermission();

      return permissionRes.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );

      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image);
  };

  return (
    <>
      <View style={styles.imagePreview}>
        {!pickedImage?.uri ? (
          <Text>No image taken yet.</Text>
        ) : (
          <Image
            style={styles.image}
            source={{ uri: pickedImage?.uri }}
          />
        )}
      </View>

      <Button variant="outlined" icon="camera" onPress={takeImageHandler}>
        Take Image
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.colors[themeColor][100],
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
