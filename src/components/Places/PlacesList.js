import PropTypes from 'prop-types';
import { FlatList, View, StyleSheet } from 'react-native';

import { PlaceItem } from './PlaceItem';
import { textStyles } from '../../theme';
import { Text } from '../Text';

export const PlacesList = ({ places = [] }) => {
  return !places?.length ? (
    <View style={styles.emptyContainer}>
      <Text style={textStyles.h6}>No places added yet</Text>
    </View>
  ) : (
    <FlatList data={places} keyExtractor={(item) => item?.id} renderItem={({ item }) => <PlaceItem place={item} />} />
  );
};

PlacesList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      place: PropTypes.shape({
        title: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        imageUri: PropTypes.string.isRequired,
      }),
    })
  ),
};

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
