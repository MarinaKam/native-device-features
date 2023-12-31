import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { GlobalContext } from '../../store/GlobalProvider';
import { globalStyles } from '../../theme';
import { Text } from '../Text';

export const Button = ({
  variant = 'contained', // outlined, contained
  color, // primary, secondary, info, success, error, warning
  icon,
  style,
  children,
  onPress,
}) => {
  const { theme } = useContext(GlobalContext);
  const mainColor = globalStyles.colors?.[color]?.main || globalStyles.colors[theme]?.main;

  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? styles.pressed : null,
        styles.button,
        variant === 'contained' && {
          backgroundColor: mainColor,
        },
        variant === 'outlined' && {
          borderWidth: 1,
          backgroundColor: 'transparent',
          borderColor: mainColor,
        },
        style,
      ]}
      onPress={onPress}
    >
      {icon && (
        <Ionicons name={icon} size={18} style={styles.icon} color={variant === 'contained' ? 'white' : mainColor} />
      )}

      <Text style={{ color: variant === 'contained' ? 'white' : mainColor }}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: globalStyles.borderRadius,
    padding: 8,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 6,
  },
  pressed: {
    opacity: 0.75,
  },
});
