import { useContext, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { GlobalContext } from '../../store/GlobalProvider';
import { globalStyles, textStyles } from '../../theme';
import { Text } from '../Text';
import { ImagePicker } from './ImagePicker';
import { LocationPicker } from './LocationPicker';

export const PlaceForm = () => {
  const { theme } = useContext(GlobalContext);
  const [titleVal, setTitleVal] = useState('');

  const handleChangeTitle = (val) => {
    setTitleVal(val);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={[textStyles.fontBold, styles.label]}>Title</Text>

        <TextInput
          value={titleVal}
          style={[
            textStyles.color,
            styles.input,
            {
              borderBottomColor: globalStyles.colors[theme].dark,
              backgroundColor: globalStyles.colors[theme][100]
            }
          ]}
          onChangeText={handleChangeTitle}
        />
      </View>

      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 24,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    marginVertical: 8,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderRadius: globalStyles.borderRadius,
  },
});
