import PropTypes from 'prop-types';
import { Text as MuiText } from 'react-native';

import { textStyles } from '../../theme';

export const Text = ({ children, style }) => {
  console.log('style', style);
  return <MuiText style={[textStyles.color, textStyles.default, style]}>{children}</MuiText>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.oneOf([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}), null)]),
};
