import { View, Pressable, StyleSheet } from 'react-native';
import { globalStyles } from '../../theme';
import { Text } from '../Text';

export const Button = ({ width = '100%', style, children, onPress }) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={({ pressed }) => ([pressed ? styles.pressed : null, { width }])} onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
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
    backgroundColor: globalStyles.colors.secondary.main,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: globalStyles.colors.secondary.light,
    borderRadius: 4,
  },
});
