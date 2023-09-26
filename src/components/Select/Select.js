import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, textStyles, themeColor } from '../../theme';

export const Select = ({ defaultValue, options = [], onChange = () => {} }) => {
  const [value, setValue] = useState(defaultValue);

  const onValueChange = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <View>
      <RNSelect
        style={styles}
        useNativeAndroidPickerStyle={false}
        items={options}
        placeholder={{}}
        value={value}
        onValueChange={onValueChange}
        Icon={() => (
          <Ionicons
            name="chevron-down"
            size={24}
            color={globalStyles.colors[themeColor].main}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputIOS: {
    marginVertical: 8,
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 2,
    backgroundColor: globalStyles.colors[themeColor][100],
    borderColor: globalStyles.colors[themeColor].main,
    borderRadius: globalStyles.borderRadius,
    color: textStyles.color.color,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginVertical: 8,
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 2,
    backgroundColor: globalStyles.colors[themeColor][100],
    borderColor: globalStyles.colors[themeColor].main,
    borderRadius: globalStyles.borderRadius,
    color: textStyles.color.color,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 17,
    right: 10,
  },
});
