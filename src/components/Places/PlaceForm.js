import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { globalStyles, textStyles } from '../../theme';
import { Text } from '../Text';
import { ImagePicker } from './ImagePicker';

export const PlaceForm = () => {
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
          style={[textStyles.color, styles.input]}
          onChangeText={handleChangeTitle}
        />
      </View>

      <ImagePicker />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    // flex: 1,
    padding: 24
  },
  label: {
    marginBottom: 4
  },
  input: {
    marginVertical: 8,
    padding: 8,
    fontSize: 16,
    borderBottomColor: globalStyles.colors.secondary.dark,
    borderBottomWidth: 2,
    backgroundColor: globalStyles.colors.secondary[100],
    borderRadius: 8
  }
});
