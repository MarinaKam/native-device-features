import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useContext, useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';

import { GlobalContext } from '../../store/GlobalProvider';
import { globalStyles } from '../../theme';
import { Button } from '../Buttons';
import { Text } from '../Text';

export const ImagePicker = () => {
  const { theme } = useContext(GlobalContext);
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState(null);

  const verifyPermission = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionRes = await requestPermission();

      return permissionRes.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app.');

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
      <View style={[styles.imagePreview, { backgroundColor: globalStyles.colors[theme][100] }]}>
        {!pickedImage?.uri ? (
          <Text>No image taken yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage?.uri }} />
        )}
      </View>

      <Button variant="outlined" icon="camera" onPress={takeImageHandler}>
        Take Image
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  imagePreview: {
    alignItems: 'center',
    borderRadius: globalStyles.borderRadius,
    height: 200,
    justifyContent: 'center',
    marginVertical: 8,
    overflow: 'hidden',
    width: '100%',
  },
});
