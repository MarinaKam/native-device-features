import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Pressable } from 'react-native';

import { ShadowView } from '../ShadowView';
import { Text } from '../Text';

export const PlaceItem = ({ place, onSelect }) => {
  return (
    <ShadowView>
      <Pressable style={({ pressed }) => (pressed ? styles.itemPressed : null)} onPress={onSelect}>
        <Image source={{ uri: place?.imageUri }} />

        <View>
          <Text>{place?.title}</Text>
          <Text>{place?.address}</Text>
        </View>
      </Pressable>
    </ShadowView>
  );
};

PlaceItem.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    imageUri: PropTypes.string.isRequired,
  }),
  onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  itemPressed: {
    opacity: 0.5,
  },
});
