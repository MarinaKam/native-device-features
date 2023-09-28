import PropTypes from 'prop-types';
import { Text as MuiText } from 'react-native';

import { textStyles } from '../../theme';

export const Text = ({ children, style }) => (
  <MuiText style={[textStyles.color, textStyles.default, style]}>{children}</MuiText>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.oneOf([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
};

Text.defaultProps = {
  style: null
};

