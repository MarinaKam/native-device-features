import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { textStyles } from '../../theme';
import { ShadowView } from '../ShadowView';

export const PlaceItem = ({ place, onSelect }) => {
  return (
    <ShadowView>
      <Pressable style={({ pressed }) => (pressed ? styles.itemPressed : null)} onPress={onSelect}>
        <Image source={{ uri: place?.imageUri }} />

        <View>
          <Text style={[textStyles.default]}>{place?.title}</Text>
          <Text style={[textStyles.default]}>{place?.address}</Text>
        </View>
      </Pressable>
    </ShadowView>
  );
};

const styles = StyleSheet.create({
  itemPressed: {
    opacity: 0.5,
  },
});
