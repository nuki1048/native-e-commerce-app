import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

const SearchInput: React.FC<Props> = ({ placeholder, style, ...props }) => {
  const inputRef = React.useRef<TextInput>(null);
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={() => inputRef.current?.focus()}
    >
      <View style={[styles.container, style]}>
        <Ionicons name='search' size={24} color='black' />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder={'Search'}
          {...props}
        />
      </View>
    </Pressable>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: 'white',
    borderRadius: 27,
    gap: 16,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
  pressed: {
    opacity: 0.5,
  },
});
