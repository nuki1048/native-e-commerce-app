import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { StyleProp } from 'react-native';

interface Props extends TextInputProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
}

const Input: React.FC<Props> = ({
  value,
  onChangeText,
  label,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: Colors.light.textSecondary,
  },
  input: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: Colors.light.text,
  },
});
