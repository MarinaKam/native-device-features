import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { GlobalContext } from '../../store/GlobalProvider';
import { globalStyles } from '../../theme';

export const ShadowView = ({ children, style }) => {
  const { theme } = useContext(GlobalContext);

  return <View style={[styles.container, { shadowColor: globalStyles.colors[theme].dark }, style]}>{children}</View>;
};

ShadowView.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: globalStyles.borderRadius,
    elevation: 4,
    marginHorizontal: 18,
    marginVertical: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
