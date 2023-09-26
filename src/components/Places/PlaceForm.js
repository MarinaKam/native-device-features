import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { globalStyles, textStyles, themeColor } from '../../theme';
import { Text } from '../Text';
import { ImagePicker } from './ImagePicker';
import { LocationPicker } from './LocationPicker';

export const PlaceForm = () => {
  const [titleVal, setTitleVal] = useState('');

  const handleChangeTitle = (val) => {
    setTitleVal(val);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={[textStyles.fontBold, styles.label]}>Title</Text>

        <TextInput value={titleVal} style={[textStyles.color, styles.input]} onChangeText={handleChangeTitle} />
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
    borderBottomColor: globalStyles.colors[themeColor].dark,
    borderBottomWidth: 2,
    backgroundColor: globalStyles.colors[themeColor][100],
    borderRadius: globalStyles.borderRadius,
  },
});
