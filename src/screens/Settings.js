import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Select } from '../components/Select';
import { Text } from '../components/Text';
import { GlobalContext } from '../store/GlobalProvider';
import { textStyles } from '../theme';

const options = [
  { label: 'Primary', value: 'primary' },
  { label: 'Secondary', value: 'secondary' },
  { label: 'Info', value: 'info' },
  { label: 'Success', value: 'success' },
  { label: 'Error', value: 'error' },
  { label: 'Warning', value: 'warning' },
];

export const Settings = () => {
  const { theme, updateTheme } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Text style={[textStyles.h4, textStyles.center]}>You can change a theme color</Text>

      <View style={styles.selectContainer}>
        <Select defaultValue={theme} options={options} onChange={updateTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  selectContainer: {
    width: '100%',
    marginVertical: 16,
  },
});
