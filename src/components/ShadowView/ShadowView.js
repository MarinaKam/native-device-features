import { Platform, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../theme';

export const ShadowView = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 18,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: globalStyles.colors.primary.dark,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
