import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNSelect from 'react-native-picker-select';

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
          },
        }}
        useNativeAndroidPickerStyle={false}
        items={options}
        placeholder={{}}
        value={value}
        onValueChange={onValueChange}
        Icon={() => <Ionicons name="chevron-down" size={24} color={globalStyles.colors[theme].main} />}
      />
    </View>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  iconContainer: {
    right: 10,
    top: 17,
  },
  inputAndroid: {
    borderRadius: globalStyles.borderRadius,
    borderWidth: 2,
    color: textStyles.color.color,
    fontSize: 14,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingRight: 30,
    paddingVertical: 6, // to ensure the text is never behind the icon
  },
  inputIOS: {
    borderRadius: globalStyles.borderRadius,
    borderWidth: 2,
    color: textStyles.color.color,
    fontSize: 14,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingRight: 30,
    paddingVertical: 12, // to ensure the text is never behind the icon
  },
});
