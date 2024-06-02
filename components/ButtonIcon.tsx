import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export enum Type {
  Primary = 'primary',
  Ghost = 'ghost',
}

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

interface IconButton extends PressableProps {
  icon: IoniconsName;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const IconButton: React.FC<IconButton> = ({
  children,
  icon,
  style,
  color = 'white',
  ...props
}) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
    >
      <Ionicons name={icon} size={20} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 80,
    height: 40,
    backgroundColor: Colors.light.primaryButton,
    borderRadius: 8,
    gap: 16,
  },

  pressed: {
    opacity: 0.5,
  },
});
