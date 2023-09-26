import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { GlobalContext } from '../../store/GlobalProvider';
import { globalStyles, textStyles } from '../../theme';

export const Select = ({ defaultValue, options = [], onChange = () => {} }) => {
  const { theme } = useContext(GlobalContext);
  const [value, setValue] = useState(defaultValue);

  const onValueChange = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <View>
      <RNSelect
        style={{
          ...styles,
          inputIOS: {
            ...styles.inputIOS,
            backgroundColor: globalStyles.colors[theme][100],
            borderColor: globalStyles.colors[theme].main,
          },
          inputAndroid: {
            ...styles.inputAndroid,
            backgroundColor: globalStyles.colors[theme][100],
            borderColor: globalStyles.colors[theme].main,
          }
        }}
        useNativeAndroidPickerStyle={false}
        items={options}
        placeholder={{}}
        value={value}
        onValueChange={onValueChange}
        Icon={() => (
          <Ionicons
            name="chevron-down"
            size={24}
            color={globalStyles.colors[theme].main}
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
    borderRadius: globalStyles.borderRadius,
    color: textStyles.color.color,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 17,
    right: 10,
  },
});
