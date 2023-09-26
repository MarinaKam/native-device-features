import { useContext } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { GlobalContext } from '../../store/GlobalProvider';
import { globalStyles } from '../../theme';

export const ShadowView = ({ children, style }) => {
  const { theme } = useContext(GlobalContext);

  return (
    <View
      style={[
        styles.container,
        { shadowColor: globalStyles.colors[theme].dark },
        style
      ]}
    >
      {children}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: globalStyles.borderRadius,
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 18,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
