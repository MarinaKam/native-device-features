import { FlatList } from 'react-native';
import { PlaceItem } from './PlaceItem';

export const PlacesList = ({ places = [] }) => {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => <PlaceItem {...item} />}
    />
  );
};
