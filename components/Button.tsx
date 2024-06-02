import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import Animated from 'react-native-reanimated';

export enum Type {
  Primary = 'primary',
  Ghost = 'ghost',
}

interface ButtonProps extends PressableProps {
  type?: Type;
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = Type.Primary,
  icon,
  style,
  textStyle,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        type === Type.Ghost && styles.ghost,
        style,
      ]}
    >
      {icon && icon}
      <Animated.Text
        style={[
          styles.text,
          type === Type.Ghost && styles.ghostText,
          textStyle,
        ]}
      >
        {children}
      </Animated.Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 160,
    height: 56,
    backgroundColor: Colors.light.primaryButton,
    borderRadius: 8,
    gap: 16,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  ghostText: {
    color: Colors.light.textSecondary,
  },
});
