import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, StyleSheet } from 'react-native';
import { globalStyles, themeColor } from '../../theme';
import { Text } from '../Text';

export const Button = ({
  variant = 'contained', // outlined, contained
  color = themeColor, // primary, secondary, info, success, error, warning
  width = '100%',
  icon,
  style,
  children,
  onPress
}) => {
  const mainColor = globalStyles.colors?.[color]?.main || globalStyles.colors[themeColor]?.main;

  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={({ pressed }) => (
          [
            pressed ? styles.pressed : null,
            styles.button,
            variant === 'contained' && {
              backgroundColor: mainColor
            },
            variant === 'outlined' && {
              borderWidth: 1,
              backgroundColor: 'transparent',
              borderColor: mainColor
            },
            { width }
          ]
        )}
        onPress={onPress}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={18}
            style={styles.icon}
            color={variant === 'contained' ? 'white' : mainColor}
          />
        )}

        <Text style={{ color: variant === 'contained' ? 'white' : mainColor}}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 4,
    padding: 8,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 6
  },
  pressed: {
    opacity: 0.75
  },
});
