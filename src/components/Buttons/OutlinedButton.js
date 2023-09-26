import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../theme';
import { Text } from '../Text';

export const OutlinedButton = ({ width = '100%', style, icon, children, onPress }) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={({ pressed }) => ([pressed ? styles.pressed : null, styles.button, { width }])} onPress={onPress}>
        {icon && (
          <Ionicons
            name={icon}
            size={18}
            style={styles.icon}
            color={globalStyles.colors.secondary.main}
          />
        )}
        <Text style={styles.buttonText}>{children}</Text>
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
    backgroundColor: 'transparent',
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: globalStyles.colors.secondary.main
  },
  buttonText: {
    color: globalStyles.colors.secondary.main,
  },
  icon: {
    marginRight: 6
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: globalStyles.colors.secondary.light,
    borderRadius: 4,
  },
});
