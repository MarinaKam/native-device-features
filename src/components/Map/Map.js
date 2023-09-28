// import { GOOGLE_API_TOKEN } from '@env';
import { View, StyleSheet } from 'react-native';

import { Text } from '../Text';

export const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
  },
  // map: {
  //   flex: 1,
  // },
});
