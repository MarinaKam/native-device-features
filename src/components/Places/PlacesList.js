import { FlatList, View, StyleSheet } from 'react-native';
import { textStyles } from '../../theme';
import { Text } from '../Text';
import { PlaceItem } from './PlaceItem';

export const PlacesList = ({ places = [] }) => {
  return !places?.length ? (
    <View style={styles.emptyContainer}>
      <Text style={[textStyles.h6]}>
        No places added yet
      </Text>
    </View>
  ) : (
    <FlatList
      data={places}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
