import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

interface Props {
  selected?: boolean;
  text: string;
  icon: IoniconsName;
  onPress: () => void;
}

const TextOption: React.FC<Props> = ({ icon, selected, text, onPress }) => {
  const textColor = selected ? Colors.light.purple : Colors.light.textSecondary;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.textBlock}>
          <Ionicons
            name={icon}
            size={24}
            color={selected ? Colors.light.purple : Colors.light.text}
          />
          <ThemedText lightColor={textColor}>{text}</ThemedText>
        </View>
        {selected && <Ionicons name='checkmark' color={textColor} size={24} />}
      </View>
    </Pressable>
  );
};

export default TextOption;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 0,
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  selectedTextColor: {
    color: Colors.light.purple,
  },
  pressed: {
    opacity: 0.8,
  },
});
