import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Pressable, StyleSheet } from 'react-native';

export const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

IconButton.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  pressed: {
    opacity: 0.7,
  },
});
